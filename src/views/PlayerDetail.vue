<template>

    <div class="player-detail">
        <div class="player-detail__content" v-if="!isNoSong">
            <mu-appbar>
                <mu-icon-button icon='expand_more' slot="left" @click="hidePlayerDetail" />
            </mu-appbar>
            <div class="cover">
                <img :src="audio.coverUrl  | formatImageExt">
            </div>
            <div class="process">
                <mu-slider v-model="currentTimePercent" @change="changeTime" />
                <div class="time">
                    <time id="cur">{{ currentTime | formatTime }}</time>
                    <time id="total">{{ durationTime | formatTime }}</time>
                </div>
            </div>
            <div class="info">
                <mu-icon-button icon='favorite_border' slot="left" />
                <div>
                    <div class="name">{{ audio.title }}</div>
                    <div class="singer">{{ audio.singer }} - {{ audio.album }}</div>
                </div>
                <mu-icon-button icon='chat_bubble_outline' slot="left" />
            </div>

            <div class="ctr">
                <mu-icon-button icon='shuffle' slot="left" />
                <mu-icon-button class="skip" icon='skip_previous' slot="left" @click="prev" />
                <mu-icon-button class="play-pause" @click="toggleStatus()" :icon='!isPlaying? "play_circle_outline" : "pause_circle_outline"'
                    slot="left" />
                <mu-icon-button class="skip" icon='skip_next' slot="left" @click="next" />
                <mu-icon-button icon='more_horiz' slot="left" />
            </div>
        </div>
        <div class="song-empty" v-else>
            <div class="tip">
                <mu-icon value="not_interested"></mu-icon>
                <span>当前没有歌曲播放</span>
            </div>
        </div>

        <div class="mask">
            <div class="album-cover" :style="`background-image:url(${audio.coverUrl})`"></div>
            <div class="cover-mask" style="opacity:0.6;"></div>
        </div>

    </div>

</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return { value2: 50 }
        },
        computed: { 
            ...mapGetters([
                'audio',
                'player',
                'isNoSong',
                'isPlaying',
                'currentTime',
                'durationTime',
                'currentTimePercent'
            ]),
            songList() {

            }
        },
        methods: {
            hidePlayerDetail() {
                this.$store.commit("togglePlayerDetail", false);
            },
            toggleStatus() {
                if (this.isPlaying) {
                    document.getElementById('AudioPlay').pause()
                    this.$store.commit('pause')
                } else {
                    document.getElementById('AudioPlay').play()
                    this.$store.commit('play')
                }
            },
            changeTime(value) {
                var time = (value * this.audio.durationTime) / 100
                this.$store.commit('changeTime', time)
                this.$store.commit('setChange', true)
            },
            prev(){
                this.$store.dispatch('playPrev');
            },
            next(){
                this.toggleStatus();
                this.$store.dispatch('playNext');
            }
        }
    }

</script>

<style lang="scss" scoped>
    .player-detail, .song-empty {
        position: absolute;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: hidden;
        background-color: #fff;
    }

    .song-empty{
        background-color: transparent;
        .tip {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: .3;
            .mu-icon {
                font-size: 128px;
                color: #a8a8a8;
                margin-bottom: 24px;
            }
            span{
                color: #c8c8c8;
            }
        }
    }
    
    .player-detail__content {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100%;
        z-index: 3;
        .mu-appbar {
            flex: 0 0 56px;
            background: transparent;
            box-shadow: none;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, .3) 0%, rgba(0, 0, 0, 0) 100%);
        }
        .cover {
            //align-self: flex-start;
            width: 100%;
            margin-top: -56px;
            img {
                width: 100vw;
                display: block;
            }
        }
        .process {
            .mu-slider {
                margin-top: -12px;
                margin-bottom: 0;
            }
            .time {
                display: flex;
                margin-top: -4px;
                justify-content: space-between;
                color: #fff;
                padding-left: 10px;
                padding-right: 10px;
                opacity: .6;
            }
        }
        .info {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 .5vh;
            color: #fff;
            text-shadow: 0 0 2px rgba(0, 0, 0, .8);
            button {}
            .name {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 16px;
            }
            .singer {
                font-size: 12px;
                opacity: .6;
            }
            &>div {
                flex: 1;
                min-width: 0;
                text-align: center
            }
        }
        .ctr {
            flex: 1;
            color: #fff;
            width: 100%;
            justify-content: space-around;
            align-items: center;
            display: flex;
        }
    }
    
    .mask {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        transform: scale(1.15);
    }
    
    .album-cover {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        filter: blur(18px);
    }
    
    .cover-mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .8);
    }
</style>

<style>
    .play-pause {
        width: 96px !important;
        height: 96px !important;
    }
    
    .skip {
        width: 64px !important;
        height: 64px !important;
    }
    
    .skip .mu-icon {
        font-size: 32px;
    }
    
    .play-pause .mu-icon {
        font-size: 48px;
    }
</style>