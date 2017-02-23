<template>
    <div class="foot">
        <mu-bottom-nav class="player-bar">

            <div class="player-bar__content">
                <div class="cover">
                    <img src="//pic.xiami.net/images/album/img17/23517/4386281386439629.jpg@!c-400-400">
                </div>
                <div class="info">
                    <div class="name">想自由</div>
                    <div class="artist">林宥嘉</div>
                </div>
                <div class="ctr">
                    <mu-icon-button icon="play_arrow" iconClass="icon-lg" />
                    <mu-icon-button icon="skip_next" iconClass="icon-lg" />
                </div>
                <div class="pro"></div>
            </div>

            <div class="blur-bg">
                <div class="o-bg" style="background-image:url(//pic.xiami.net/images/album/img17/23517/4386281386439629.jpg@!c-400-400)"></div>
                <div class="mask"></div>
            </div>

        </mu-bottom-nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
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