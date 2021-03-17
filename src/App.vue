<template>
  <div>
    <HomePage />
    <foot></foot>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import HomePage from './components/HomePage.vue'

export default {
  components: {
    'foot' : Footer,
    HomePage
  }
}
</script>

<style>

</style>
