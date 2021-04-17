<template>
  <div>
    
    <top-nav></top-nav>

    <b-container id="container" fluid>
      <carousel></carousel>
    </b-container>


    <b-container fluid>
      <b-row align-v="center">
        <b-col>
          <b-img
            src="https://i.imgur.com/03sVNdK.png"
            fluid
            alt="placeholder"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            src="https://i.imgur.com/dr8DLP8.png"
            fluid
            alt="placeholder"
          ></b-img>
        </b-col>
        <b-col class="text-center">
          <p id="aboutus" class="animated fadeInDown">
          Clonate aims to encourage the donation of clothing for the needy,
          reduce textile waste and empower communities.<br><br>
          Join us in our cause today.
          </p>
          <signup-btn id="subutton" @click.native="$router.push('/SignUp')"></signup-btn>
        </b-col>
      </b-row>
    </b-container>

    <Footer></Footer>

  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import SignupBtn from './SignupBtn.vue';
import TopNav from "./TopNav.vue";
import Footer from "./Footer.vue"

export default {

  components: {
    Carousel,
    TopNav,
    SignupBtn,
    Footer
  },

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