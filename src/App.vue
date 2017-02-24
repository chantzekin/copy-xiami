<template>

  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <transition name="slide-delay">
      <player-bar v-show="!player.isShowPlayerDetail"></player-bar>
    </transition>
    <transition name="slide">
      <player-detail v-show="player.isShowPlayerDetail"></player-detail>
    </transition>
  </div>

</template>

<script>
  import playerBar from './components/PlayerBar'
  import playerDetail from './views/PlayerDetail'

  import { mapGetters } from 'vuex'

  export default {
    data() {

    },
    computed: { 
        ...mapGetters(['player'])
    },
    components: {
      playerBar,
      playerDetail
    }
  }

</script>

<style>
  body,
  html {
    height: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: #2c3e50;
  }
  
  .slide-enter-active,
  .slide-leave-active {
    transition: all .3s ease;
  }
  
  .slide-enter,
  .slide-leave-active {
    transform: translateY(100%);
  }

  .slide-delay-enter-active,
  .slide-delay-leave-active {
    transition: all .3s ease;
    transition-delay: .2s;
  }
  
  .slide-delay-enter,
  .slide-delay-leave-active {
    transform: translateY(100%);
  }
</style>