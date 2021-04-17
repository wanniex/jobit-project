<template>
  <div>
    
    <top-nav></top-nav>


    <b-container fluid>
       <b-row align-h="center" class="mt-5 mb-5 wow fadeInUp">
           <h2 id="stepsfont">How to Clonate?</h2>
       </b-row>
      <b-row align-v="center" class="wow fadeInUp">
        <b-col>
          <b-img
            src="https://i.imgur.com/DOItRfm.png"
            fluid
            alt="placeholder"
          ></b-img>
        </b-col>
                <b-col cols="1"></b-col>
        <b-col>
          <b-img
            src="https://i.imgur.com/AlJ9z5W.png"
            fluid
            alt="placeholder"
          ></b-img>
        </b-col>
                <b-col cols="1"></b-col>
        <b-col class="text-center">
            <b-img
            src="https://i.imgur.com/TWcKSDq.png"
            fluid
            alt="placeholder"
          ></b-img>
        </b-col>
      </b-row>


      <b-row align-h="center" class="mt-5 wow fadeInLeft">

      <b-col class="text-center mb-5" cols="3">
          <b-row align-h="center">
              <h3 id="stepsfont">01</h3>
          </b-row>
          <b-row align-h="center" class="mt-3">
              <h3 id="stepsfont">CLONATE YOUR CLOTHES</h3>
          </b-row>
          <b-row align-h="center" class="mt-2">
             <p>Drop off your clothes at <br>any of our partnering locations!</p>
          </b-row>
      </b-col>

<!-- Separator -->
<b-col cols="1"></b-col>


            <b-col class="text-center mb-5" cols="3">
          <b-row align-h="center">
              <h3 id="stepsfont">02</h3>
          </b-row>
          <b-row align-h="center" class="mt-4">
              <h3 id="stepsfont">ADMIN INSPECTION</h3>
          </b-row>
          <b-row align-h="center" class="mt-3">
             <p>Be patient and wait for our admins at our partnering locations to inspect and approve your Clonation.</p>
          </b-row>
      </b-col>

<!-- Separator -->
      <b-col cols="1"></b-col>

            <b-col class="text-center mb-5" cols="3">
          <b-row align-h="center">
              <h3 id="stepsfont">03</h3>
          </b-row>
          <b-row align-h="center" class="mt-4">
              <h3 id="stepsfont">BE REWARDED</h3>
          </b-row>
          <b-row align-h="center" class="mt-3">
             <p>Be rewarded with points from your Clonation and use them to redeem vouchers from any of our merchant partners!</p>
          </b-row>
      </b-col>
      </b-row>

      <b-row align-h="center" class="mt-5 wow fadeInUp">
          <p id="aboutus">
          Clonate aims to encourage the donation of clothing for the needy,<br>
          reduce textile waste and empower communities.<br><br>
          Join us in our cause today.
          </p>
      </b-row>

      <b-row align-h="center" class="mb-5 wow fadeInUp">
      <SignupBtn id="subutton" @click.native="$router.push('/SignUp')"></SignupBtn>
      </b-row>

    </b-container>

    <Footer></Footer>

  </div>
</template>

<script>
import TopNav from "./TopNav.vue";
import Footer from "./Footer.vue";
import SignupBtn from './SignupBtn.vue';
import {WOW} from 'wowjs';

export default {

  components: {
    TopNav,
    Footer,
    SignupBtn
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

#stepsfont {
font-family: "Arial Black", Gadget, sans-serif;
font-size: 25px;
letter-spacing: -0.8px;
word-spacing: 2px;
color: #525252;
font-weight: 400;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: uppercase;
}
</style>