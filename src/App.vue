<template>
  <div>
    <HomePage />

    <loginBtn></loginBtn>
    <signupBtn></signupBtn>

  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'



export default {
  components: {

    HomePage

import SignupBtn from './components/SignupBtn.vue'
import LoginBtn from './components/LoginBtn.vue'

export default {
  components: {
    HomePage,
    'loginBtn': LoginBtn,
    'signupBtn': SignupBtn

  }
}
</script>

<style>

</style>
