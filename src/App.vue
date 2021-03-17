<template>
  <div>
    <HomePage />
    <foot></foot>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import HomePage from './components/HomePage.vue'
import SignupBtn from './components/SignupBtn.vue'
import LoginBtn from './components/LoginBtn.vue'

export default {
  components: {
    'foot' : Footer,
    HomePage,
    'loginBtn': LoginBtn,
    'signupBtn': SignupBtn
  }
}
</script>

<style>

</style>
