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
            id: 0,
            title: '想自由',
            singer: '林宥嘉',
            ablum: '美妙生活',
            currentTime: 0,
            durationTime: 0,
            bufferedTime: 0,
            tmpCurrentTime: 0,
            change: false,
            songUrl: 'http://om5.alicdn.com/517/23517/438628/1770182611_2283338_l.mp3?auth_key=3e2868f1122b056b74d569f363cccd5f-1488769200-0-null',
            coverUrl: 'http://img.xiami.net/images/album/img17/23517/4386281386439629.jpg',
        },
        audioLoading: false,
        isPlaying: false, // 是否正在播放
        listInfo: {
            songList: [],
            songIndex: 0
        },
        player: {
            isShowPlayerDetail: false
        },
        homeData: {
            banner: HomeData.data.list[0].banner,
            radios: HomeData.data.list[1].radios,
            collections: HomeData.data.list[2].collections
        },
        collectData: CollectData.data.collects,
        rankData: RankData.data.common_list
    },
    getters: {
        audio: state => state.audio,
        homeData: state => {
            return state.homeData;
        },
        collectData: state => state.collectData,
        rankData: state => state.rankData,
        player: state => state.player,
        isPlaying: state => state.isPlaying,
        currentTimePercent: state => {
            return state.audio.currentTime / state.audio.durationTime * 100;
        },
        bufferedTimePercent: state => {
            return state.audio.bufferedTime / state.audio.durationTime * 100;
        }
    },
    mutations: {
        play(state) {
            state.isPlaying = true
        },
        pause(state) {
            state.isPlaying = false
        },
        togglePlayerDetail: (state, flag) => {
            state.player.isShowPlayerDetail = flag;
        },
        updateCurrentTime(state, time) {
            state.audio.currentTime = time
        },
        updateDurationTime(state, time) {
            state.audio.durationTime = time
        },
        updateBufferedTime(state, time) {
            state.audio.bufferedTime = time
        }
    }
})

export default store