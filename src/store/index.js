import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import HomeData from './homeData'
import CollectData from './collectData'
import RankData from './rankData'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        audio: {
            songUrl: 'http://om5.alicdn.com/517/23517/438628/1770182611_2283338_l.mp3?auth_key=3e2868f1122b056b74d569f363cccd5f-1488769200-0-null',
            coverUrl: 'http://img.xiami.net/images/album/img17/23517/4386281386439629.jpg',
            title: '想自由',
            singer: '林宥嘉',
            ablum: '美妙生活',
            currentLength: 0,
            songLength: 0,
            currentFlag: false
        },
        audioLoading: false,
        isPlay: true,
        listInfo: {
            songList: [],
            songIndex: 0
        },
        homeData: {
            banner: HomeData.data.list[0].banner,
            radios: HomeData.data.list[1].radios,
            collections: HomeData.data.list[2].collections
        },
        collectData: CollectData.data.collects,
        rankData: RankData.data.common_list,
        player: {
            isShowPlayerDetail: false
        }
    },
    getters: {
        audio: state => state.audio,
        homeData: state => {
            return state.homeData;
        },
        collectData: state => state.collectData,
        rankData: state => state.rankData,
        player: state => state.player
    },
    mutations: {
        togglePlayerDetail: (state, flag) => {
            state.player.isShowPlayerDetail = flag;
        }
    }
})

export default store