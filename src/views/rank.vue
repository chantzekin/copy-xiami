<template>
    <div class="rank">
        <div class="rank-categories" v-for="rc in ranks">
            <mu-list class="rank-category">
                <mu-sub-header class="rank-category__title">{{ rc.category }}</mu-sub-header>
                <template class="rank-list" v-for="(r, index) in rc.items">
                    <mu-list-item class="rank-item">
                        <div class="rank-item__cover">
                            <div class="logo">
                                <img :src="r.logo">
                            </div>
                            <div class="remark update" v-if="r.show_type != 1">{{ r.update_date }}</div>
                            <div class="icon play" v-if="r.show_type != 1">
                                <mu-icon value="play_circle_filled"></mu-icon>
                            </div>
                        </div>
                        <div class="rank-item__info" v-if="r.show_type != 1">
                            <div class="title">{{ r.title }}</div>
                            <div class="songs">
                                <div class="song" v-for="(song, index) in r.songs.slice(0, 3)">
                                    {{ `${index + 1}.${song.singers} - ${song.song_name}` }}
                                </div>
                            </div>
                        </div>
                        <div class="rank-item__info" v-else>
                            <div class="title">{{ r.title }}</div>
                            <div class="text">{{ r.show_text }}</div>
                            <span class="guide">{{ r.guide_text }}</span>
                        </div>
                        <mu-icon class="right" value="chevron_right"></mu-icon>
                    </mu-list-item>
                    <mu-divider inset />
                </template>
            </mu-list>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ranks: this.$store.getters.rankData
            }
        }
    }

</script>

<style lang="scss" scoped>
    .rank-item {
        width: 100%;
        .right {
            display: flex;
            align-items: center;
            color: #cacaca;
        }
    }
    
    .rank-category__title {
        font-size: 17px;
        color: #333;
    }
    
    .rank-item__cover {
        position: relative;
        flex: 0 0 108px;
        .logo {
            img {
                display: block;
                width: 108px;
                height: 108px;
            }
        }
        .remark {
            position: absolute;
            left: 6px;
            bottom: 8px;
            font-size: 12px;
            line-height: 1;
            color: #fff;
            text-shadow: 0 0 2px rgba(1px, 1px, 1px, .4);
        }
        .icon {
            display: block;
            width: 36px;
            height: 36px;
            position: absolute;
            right: 2px;
            bottom: 4px;
            color: #ff8833;
            line-height: 1;
            background: #fff;
            border-radius: 50%;
            transform: scale(.8);
            .mu-icon {
                font-size: 36px;
                transform: scale(1.3);
            }
        }
    }
    
    .rank-item__info {
        flex: 1;
        margin-left: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
        .title {
            font-size: 16px;
            margin-bottom: 4px;
        }
        .songs {
            color: #a8a8a8;
            .song {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
        .text{
            color: #a8a8a8;
        }
        .guide{
            margin-top: 16px;
            font-size: 16px;
            line-height: 2;
            border: 1px solid #555;
            padding-left: 24px;
            padding-right: 24px;
            border-radius: 48px;
            display: inline-block;
            align-self: flex-start;
        }
    }
</style>

<style>
    .rank-category .mu-divider.inset {
        margin-left: 16px;
    }
    
    .rank-item .mu-item {
        padding: 10px 16px;
    }
    
    .rank-item .mu-item-content {
        display: flex;
    }
    
    .rank-item .mu-item {
        padding: 10px 16px;
    }
</style>