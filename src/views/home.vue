<template>
    <div>
        <swiper :options="swiperOpt" class="banner">
            <swiper-slide v-for="slide in swiperSlides" class="banner-item">
                <img :src="slide.logo" :alt="slide.title">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <mu-flexbox class="radios">
            <mu-flexbox-item v-for="radio in radios" class="radio-item">
                <img :src="radio.logo" alt="radio.title">
                <span>{{ radio.title }}</span>
            </mu-flexbox-item>
        </mu-flexbox>
        <collect-grid class="collections">
            <sub-title>
                <span>为你推荐</span>
                <router-link :to="{ path: 'collect' }" slot="right" replace>更多</router-link>
            </sub-title>
            <template slot="gridContent">
                <collect-tile v-for="col in collections">
                    <img slot="cover" :src="col.logo" />
                    <span slot="playCount" v-if="col.play_count">
                        <mu-icon value="hearing"/>
                        {{ col.play_count | formatCount }}
                    </span>
                    <span slot="title">{{ col.name }}</span>
                    <span slot="author">{{ col.author }}</span>
                </collect-tile>
            </template>
        </collect-grid>
        <!--<mu-grid-list class="collections" cols="3">
            <mu-sub-header>为你推荐
                <a class="more" href="">更多</a>
            </mu-sub-header>
            <mu-grid-tile v-for="col in collections">
                <img :src="col.logo" />
                <span slot="title">{{col.name }}</span>
                <span slot="subTitle">{{ col.author }}</span>
                <mu-icon-button icon="hearing" slot="action" />
            </mu-grid-tile>
        </mu-grid-list>-->
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import subTitle from '../components/SubTitle'
    import collectGrid from '../components/CollectGrid'
    import collectTile from '../components/CollectTile'

    export default {
        data() {
            return {
                swiperOpt: {
                    autoplay: 5000,
                    pagination: '.swiper-pagination'
                },
                swiperSlides: this.$store.getters.homeData.banner,
                radios: this.$store.state.homeData.radios,
                collections: this.$store.state.homeData.collections
            }
        },
        components: {
            swiper,
            swiperSlide,
            subTitle,
            collectGrid,
            collectTile
        },
        filters: {
            formatCount(v) {
                if (v < 9999) {
                    return v
                } else {
                    return (v / 10000).toFixed(1) + '万'
                }
            }
        }
    }

</script>

<style lang="scss" scoped>
    .banner-item {
        &>img {
            display: block;
            width: 100%;
            height: auto;
        }
    }
    
    .radios,
    .collections {
        border-bottom: 10px solid #F8F8F8;
    }
    
    .radios {
        display: flex;
        justify-content: space-between;
        height: 86px;
        width: 100%;
        img {
            width: 30px;
            height: 30px;
            margin-bottom: 4px;
        }
    }
    
    .radio-item {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 12px;
    }
</style>
<style>
    .swiper-pagination-bullet {
        background-color: #fff !important;
    }
</style>