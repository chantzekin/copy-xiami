<template>
    <div>
        <mu-list class="collect-list">
            <mu-sub-header>推荐</mu-sub-header>
            <mu-divider />
            <template v-for="collect in collects">
                <mu-list-item class="collect-item-wrapper">
                    <div class="collect-item">
                        <div class="collect-item__cover">
                            <img :src="collect.collect_logo" />
                            <play-count :count="collect.play_count" showIcon></play-count>
                            <mu-icon class="play" value="play_circle_filled"></mu-icon>
                        </div>
                        <div class="collect-item__info">
                            <div class="title">{{ collect.collect_name }}</div>
                            <div class="desc">{{ collect.description }}</div>
                            <div class="tags"># {{ collect.tags.join(' ') }}</div>
                            <div class="author">
                                <span>{{ collect.user_name }}</span>
                                <img :src="collect.author_avatar">
                            </div>
                        </div>
                    </div>
                </mu-list-item>
                <mu-divider inset />
            </template>
        </mu-list>
    </div>
</template>

<script>
    import playCount from '../components/PlayCount'

    export default {
        data() {
            return {
                collects: this.$store.getters.collectData.slice(0, 9)
            }
        },
        components: {
            playCount
        },
        created() {
            //console.log(this.$store.getters.collectData);
        }
    }

</script>

<style lang="scss" scoped>
    .collect-list {
        .mu-divider.inset {
            margin-left: 16px;
        }
    }
    
    .collect-item-wrapper {}
    
    .collect-item {
        display: flex;
    }
    
    .collect-item__cover {
        position: relative;
        flex: 0 0 108px;
        img {
            display: block;
            width: 108px;
            height: 108px;
        }
    }
    
    .collect-item__info {
        flex: 1;
        margin-left: 16px;
        min-width: 0;
        position: relative;
        .title,
        .tags {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 15px;
        }
        .desc {
            max-height: 39px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .desc,
        .tags {
            font-size: 13px;
            color: #888;
        }
        .author {
            position: absolute;
            display: flex;
            align-items: center;
            bottom: 0;
            right: 16px;
            img {
                display: inline-block;
                height: 20px;
                width: 20px;
                border-radius: 50%;
                overflow: hidden;
                margin-left: 6px;
            }
            span {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                line-height: 20px;
                font-size: 12px;
                width: 50px;
            }
        }
    }
</style>

<style>
    .collect-item-wrapper .mu-item {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 16px;
    }
    
    .collect-item__cover .play {
        position: absolute;
        right: 4px;
        bottom: 4px;
        color: #ff8833;
        font-size: 32px;
        z-index: 2;
    }

    .collect-item__cover:after{
        content: '';
        background-color: #fff;
        position: absolute;
        width: 12px;
        height: 12px;
        bottom: 14px;
        right: 15px;
        z-index: 1;
    }
</style>