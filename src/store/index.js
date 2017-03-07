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
            title: '虾米音乐，随心而动',
            singer: '',
            album: '',
            songUrl: '',
            coverUrl: '../static/cover.jpg',
        },

        currentTime: 0,
        durationTime: 0,
        bufferedTime: 0,
        tmpCurrentTime: 0,
        isChange: false,

        isAudioLoading: false,
        isPlaying: false,

        listInfo: {
            curListId: 0,
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
        audio: state => {
            state.audio.coverUrl = state.audio.coverUrl.replace('webp', 'jpg');
            return state.audio;
        },
        player: state => state.player,
        listInfo: state => state.listInfo,

        currentTime: state => state.currentTime,
        durationTime: state => state.durationTime,
        bufferedTime: state => state.bufferedTime,
        tmpCurrentTime: state => state.tmpCurrentTime,
        isChange: state => state.isChange,
        currentTimePercent: state => state.currentTime / state.durationTime * 100,
        bufferedTimePercent: state => state.bufferedTime / state.durationTime * 100,

        isPlaying: state => state.isPlaying,
        isAudioLoading: state => state.isAudioLoading,

        homeData: state => state.homeData,
        collectData: state => state.collectData,
        rankData: state => state.rankData,
    },
    mutations: {
        play(state) {
            state.isPlaying = true
        },
        pause(state) {
            state.isPlaying = false
        },
        updateCurrentTime(state, time) {
            state.currentTime = time
        },
        updateDurationTime(state, time) {
            if(!time) state.durationTime = 0
            else state.durationTime = time
        },
        updateBufferedTime(state, time) {
            state.bufferedTime = time
        },
        changeTime(state, time) {
            state.tmpCurrentTime = time
        },
        setChange(state, isChange) {
            state.change = isChange
        },
        setAudioFile(state, fileUrl) {
            state.audio.songUrl = file;
        },


        togglePlayerDetail: (state, flag) => {
            state.player.isShowPlayerDetail = flag;
        },

        setListInfo(state, { id, list, index }) {
            if (id === state.listInfo.curListId) return;
            else state.listInfo.curListId = id;
            state.listInfo.songList = list.map(item => {
                var song = {};
                song.id = item.id;
                song.title = item.name;
                song.singer = item.artists.map(a => a.name).join('&');
                song.album = item.album.name;
                song.needPay = item.needPay;
                song.coverUrl = item.album.cover;
                song.songUrl = item.file;
                return song;
            });

            state.listInfo.songIndex = index;
        },
        setAudioByIndex(state, index) {
            state.audio = state.listInfo.songList[index];
            state.listInfo.songIndex = index;
        },

    },
    actions: {
        playNext({ commit, state }) {
            var index = state.listInfo.songIndex;

            if (index > state.listInfo.songList.length - 1) {
                index = 0;
            } else if (index === state.listInfo.songList.length - 1) {
                return;
            } else {
                index += 1;
            }

            commit('setAudioByIndex', index);
        },
        playPrev({ commit, state }) {
            var index = state.listInfo.songIndex;

            if (index < 0) {
                index = state.listInfo.songList.length - 1;
            } else if (index === state.listInfo.songList.length - 1) {
                return;
            } else {
                index -= 1;
            }
            commit('setAudioByIndex', index);
        }
    }
})

export default store