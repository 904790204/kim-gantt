<template>
  <div id="app">
    <plan-head></plan-head>
    <router-view></router-view>
  </div>
</template>

<script>
import planHead from './components/head.vue'

export default {
  name: 'app',
  components: {
    planHead
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
