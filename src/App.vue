<template>

  <div id="app">
    <transition name="slide-left">
      <keep-alive>
        <router-view class="sibling-view"></router-view>
      </keep-alive>
    </transition>
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
      return {

      }
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
  
  .sibling-view {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding-bottom: 56px;
    transition: all .3s cubic-bezier(.55, 0, .1, 1);
  }
  
  .scroll-view {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
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
  
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(30px, 0);
  }
  
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-30px, 0);
  }
</style>