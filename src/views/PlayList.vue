<template>
    <div class="play-list">
        <mu-appbar class="page__hd" :title="pageTitle" :style="headerStyle">
            <mu-icon-button icon='chevron_left' slot="left" @click="back" />
        </mu-appbar>
        <div class="page__hd-mask">
            <div class="cover" :style="'background-image:url(' + playList.cover  + ')'"></div>
            <div class="mask" style="opacity:0.6;"></div>
        </div>
        <div class="container">
            <div class="play-list__hd">
                <div class="play-list__info">
                    <mu-flexbox>
                        <div class="cover">
                            <span :style="'background-image:url(' + playList.cover + ')'"></span>
                        </div>
                        <div class="info">
                            <div class="title">{{ playList.name }}</div>
                            <div class="author">
                                <span>{{ playList.author.name }}</span>
                                <mu-icon value="chevron_right"></mu-icon>
                            </div>
                            <div class="tags">#{{ playList.tags | formatTags}}</div>
                        </div>
                    </mu-flexbox>
                    <div class="ctr">
                        <div class="ctr-item">
                            <mu-icon value="description"></mu-icon>
                            <span>介绍</span>
                        </div>
                        <div class="ctr-item">
                            <mu-icon value="favorite_border"></mu-icon>
                            <span>{{ playList.collects | formatCount }}</span>
                        </div>
                        <div class="ctr-item">
                            <mu-icon value="comment"></mu-icon>
                            <span>{{ playList.comments | formatCount }}</span>
                        </div>
                        <div class="ctr-item">
                            <mu-icon value="share"></mu-icon>
                            <span>分享</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="play-list_bd">
                <mu-list>
                    <mu-sub-header class="song-list__hd">
                        <div class="left">
                            <mu-icon value="play_circle_outline"></mu-icon>
                            全部播放 {{ playList.songCount }}首
                        </div>
                        <div class="right">
                            <mu-icon value="file_download"></mu-icon>
                            全部下载
                            <mu-icon value="more_horiz"></mu-icon>
                            管理
                        </div>
                    </mu-sub-header>
                    <mu-divider />
                    <div v-for="song in playList.songList">
                        <div class="song-item">
                            <div class="cover"><img :src="song.album.cover | formatImageExt" /></div>
                            <mu-list-item class="content" :title="song.name">
                                <span slot="describe">
                                <span v-for="artist in song.artists">
                                    <template>
                                        {{ artist.name + ' '}} 
                                    </template>
                                </span>
                                </span>
                                <mu-icon-button slot="right" icon="more_vert"></mu-icon-button>
                            </mu-list-item>
                        </div>
                        <mu-divider inset/>
                    </div>
                </mu-list>
            </div>

        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import api from '../api'

    export default {
        data() {
            return {
                initTitle: '精选集',
                pageTitle: '',
                headerStyle: {
                    backgroundColor: 'rgba(255,255,255, 0)'
                },
                playList: {
                    name: '精选集名',
                    author: {
                        name: '作者名'
                    },
                    comments: 0,
                    collects: 0,
                    songList: []
                },
                error: []
            }
        },
        computed: {
        },
        methods: {
            back() {
                this.$router.go(-1)
            },
            handleScroll() {
                let pageTitle = this.initTitle;
                var scrollTop = document.querySelector('.container').scrollTop;
                if (scrollTop > 5) {
                    this.headerStyle = {
                        backgroundColor: `rgba(255,255,255, ${scrollTop / 56})`,
                        color: '#555',
                        boxShadow: '0 1px 0 rgba(0,0,0, .1)'
                    }
                    this.pageTitle = this.playList.name;
                } else if (scrollTop < 5) {
                    this.headerStyle = {
                        backgroundColor: `rgba(255,255,255, 0)`
                    }
                    this.pageTitle = pageTitle;
                }
            },
            formatImageExt(v) {
                return v.replace('webp', 'jpg');
            },
            get() {
                var playListId = this.$route.params.id;

                this.$http.get(api.getPlaylist(playListId))
                    .then(res => {
                        var data = res.data;
                        data.cover = this.formatImageExt(data.cover);
                        this.playList = res.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
            
        },
        created() {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.get()
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            //'$route': 'get'
        },
        mounted() {
            this.$nextTick(function () {
                this.pageTitle = this.initTitle;
                var container = document.querySelector('.container')
                container.addEventListener('scroll', this.handleScroll);
            })
        }
    }

</script>

<style lang="scss" scope>
    .container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 56px;
    }
    
    .play-list_bd {
        background-color: #fff;
    }
    
    .page__hd-mask {
        overflow: hidden;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 0;
        transform: scale(1.5);
        .cover {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            filter: blur(20px);
        }
        .mask {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 3;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .8);
        }
    }
    
    .play-list .page__hd {
        background-color: transparent;
        box-shadow: none;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }
    
    .play-list__hd {
        position: relative;
        overflow: hidden;
    }
    
    .play-list__info {
        display: flex;
        flex-direction: column;
        padding-top: 62px;
        position: relative;
        z-index: 2;
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
        .cover {
            span {
                display: block;
                width: 108px;
                height: 108px;
                background-size: cover;
            }
        }
        .info {
            color: #fff;
            padding: 0 16px;
            .title {
                font-size: 15px;
            }
            .author {
                position: relative;
                display: inline-block;
                padding: 4px;
                padding-right: 15px;
                background-color: rgba(255, 255, 255, .3);
                border-radius: 4px;
                line-height: 1;
                font-size: 15px;
                vertical-align: middle;
                margin: 6px 0;
                .mu-icon {
                    display: inline-block;
                    font-size: 14px;
                    line-height: 14px;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    margin-top: -7px;
                }
            }
            .tags {
                font-size: 12px;
            }
        }
        .ctr {
            display: flex;
        }
        .ctr-item {
            flex: 1;
            margin-top: 20px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            .mu-icon {
                margin-right: 6px;
            }
        }
    }
    
    .song-list__hd {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 16px;
        .left,
        .right {
            display: flex;
            align-items: center;
            color: #333;
        }
        .mu-icon {
            margin-right: 4px;
        }
        .right {
            .mu-icon {
                margin-left: 10px;
            }
        }
    }
    
    .song-item {
        display: flex;
        padding-left: 16px;
        align-items: center;
        .cover {
            img {
                height: 40px;
                width: 40px;
            }
        }
        .content {
            flex: 1;
        }
        .mu-item-right {
            flex: 0 0 auto;
        }
    }
</style>