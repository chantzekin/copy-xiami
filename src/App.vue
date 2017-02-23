<template>

  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player-bar></player-bar>
  </div>

</template>

<script>
  import playerBar from './components/PlayerBar'

  export default {
    name: 'app',
    components: {
      playerBar
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
</style>