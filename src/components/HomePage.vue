<template>
  <div>
    
    <TopNav></TopNav>

    <b-container id="container" fluid>
      <carousel class="animated fadeInRight"></carousel>
    </b-container>


    <b-container fluid>
      <b-row align-v="center">
        <b-col>
          <b-img
            src="https://firebasestorage.googleapis.com/v0/b/jobit-38c72.appspot.com/o/clonateimages%2Fcanva-animate1.png?alt=media&token=b3016ad2-fd78-49d0-9e1f-32ce855ae6f8"
            fluid
            alt="placeholder"
            class="wow fadeInLeft"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            src="https://firebasestorage.googleapis.com/v0/b/jobit-38c72.appspot.com/o/clonateimages%2Fcanva-animate.png?alt=media&token=5eb1db17-8658-46d6-81e7-b4d6a4f503fc"
            fluid
            alt="placeholder"
            class="wow fadeInLeft"
          ></b-img>
        </b-col>
        <b-col class="text-center">
          <p id="aboutus" class="wow fadeInDown">
          Clonate aims to encourage the donation of clothing for the needy,
          reduce textile waste and empower communities.<br><br>
          Join us in our cause today.
          </p>
          <signup-btn class="wow fadeInUp" id="subutton" @click.native="$router.push('/SignUp')"></signup-btn>
        </b-col>
      </b-row>
      <div style = "padding-top: 100px;"/>
    </b-container>

    <Footer style = "position: fixed; bottom:0; width: 100%;"></Footer>

  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import SignupBtn from './SignupBtn.vue';
import TopNav from "./TopNav.vue";
import Footer from "./Footer.vue"
import {WOW} from 'wowjs';

export default {

  components: {
    Carousel,
    TopNav,
    SignupBtn,
    Footer
  },

  mounted() {
  new WOW().init();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#aboutus {
  font-family: Roboto;
  font-style: normal;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #616161;
}

#subutton {
   background-color: #87ebd3!important;
   color: rgb(71, 70, 70)!important;
   border: none;
   transition-duration: 0.4s;
   width: 100px;
   text-transform: none;
 }

 #subutton:hover {
   background-color: rgb(212, 212, 212)!important;
   color: rgb(255,255,255)!important;
 }
</style>