<template>
    <div class="foot">
        <mu-bottom-nav class="player-bar">
            <audio :src="audio.songUrl" autoplay id="AudioMain" @timeupdate="change()" @ended="next()" @error="next()">
            </audio>
            <div class="player-bar__content">
                <div class="cover" @click="showPlayerDetail">
                    <img :src="audio.coverUrl">
                </div>
                <div class="info" @click="showPlayerDetail">
                    <div class="name">{{ audio.title }}</div>
                    <div class="artist">{{ audio.singer }} - {{ audio.ablum }}</div>
                </div>
                <div class="ctr">
                    <mu-icon-button icon="play_arrow" iconClass="icon-lg" />
                    <mu-icon-button icon="skip_next" iconClass="icon-lg" />
                </div>
                <div class="pro">
                    <div class="pro-load proload" :style="{'-webkit-transform':'translateX(' + prBufferedTime +'%)' }"></div>
                    <div class="pro-play proplay" :style="{'-webkit-transform':'translateX(' + prCurrentTime +'%)' }"></div>
                </div>
            </div>

            <div class="blur-bg">
                <div class="o-bg" :style="`background-image:url(${audio.coverUrl})`"></div>
                <div class="mask"></div>
            </div>

        </mu-bottom-nav>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'PlayerBar',
        data() {
            return {
                prBufferedTime: 50,
                prCurrentTime: 50
            }
        },
        computed: {
            ...mapGetters(['audio', 'audioLoadding', 'isPlay'])
        },
        methods: {
            showPlayerDetail() {
                this.$store.commit("togglePlayerDetail", true);
            }
        }
    }

</script>

<style lang="scss" scoped>
    .foot {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 998;
    }
    
    .player-bar {
        width: 100%;
        position: relative;
        background-color: rgba(0, 0, 0, .9);
        color: #fff;
    }
    
    .player-bar__content {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        z-index: 7;
        height: 100%;
        width: 100%;
        &>div {
            height: 56px;
        }
        &>.cover {
            height: 56px;
            width: 56px;
            flex: 0 0 56px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        &>.info {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            padding: 0 12px;
            overflow: hidden;
            text-align: left;
            &> .name {
                flex-flow: row nowrap;
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-weight: 500;
                font-size: 16px;
            }
            &> .artist {
                flex-flow: row nowrap;
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 13px;
                opacity: .5;
            }
        }
        &>.ctr {
            flex: auto 0;
            align-self: flex-end;
            display: flex;
            align-items: center;
            &> .mu-icon-button {
                height: 50px;
                width: 50px;
            }
        }
        &>.pro {
            z-index: 8;
            height: 2px;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: rgba(255, 255, 255, .3);
            &>.pro-play {
                height: 2px;
                width: 100%;
                position: absolute;
                left: -100%;
                bottom: 0;
                background-color: #ff8833;
            }
        }
    }
    
    .blur-bg {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 5;
        &>.o-bg {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            filter: blur(14.6px);
            transform: scale(1.05);
        }
        &>.mask {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 6;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .4);
        }
    }
</style>
<style>
    .icon-lg {
        font-size: 26px !important;
    }
</style>