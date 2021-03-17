<template>
  <div id="app">
    <TopNav />
    <HomePage />

  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import TopNav from './components/TopNav.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    TopNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
