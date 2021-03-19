<template>
  <div id="app">
    <TopNav />
    <HomePage />
    <loginBtn></loginBtn>
    <signupBtn></signupBtn>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import TopNav from './components/TopNav.vue'
import SignupBtn from './components/SignupBtn.vue'
import LoginBtn from './components/LoginBtn.vue'

export default {
  components: {
    HomePage,
    TopNav,
    'loginBtn': LoginBtn,
    'signupBtn': SignupBtn
  }
}
</script>

<style>

</style>
