<template>
  <div>
      <TopNav></TopNav>
      <!-- <h1 style = "padding-top: 50px; weight: bolder; text-align: center;"> How to Clonate? </h1>
      <img src = "../assets/clonate_steps.png" style = "width: 90%; height: auto; display: block; margin-left: auto; margin-right: auto;"/> -->
       <div>
    <b-card-group deck class="ml-2 mr-2 mt-5">
      <b-card title="About Us" class="text-center" v-bind:img-src="imageURL2" img-alt="Card image" img-top>
        <b-card-text>
          Clonate aims to encourage the donation of clothing for the needy, <br> reduce textile waste and empower communities. 
          <br><br>Join us in our cause today.
        </b-card-text>
        <SignupBtn id="subutton" @click.native="$router.push('/SignUp')"></SignupBtn>
      </b-card>

      <b-card title="Contact Us" class="text-center">
        <b-card-text>
          Email: {{this.email}} <br>Number: {{this.number}}<br><br>
          Address:<br>{{this.address}},<br>{{this.postal}}
        </b-card-text><br>

      <GmapMap :center="center" :zoom="16">
      <GmapMarker
        v-for="(item, index) in markers"
        :key="index"
        :position="item.position"
        :clickable="true"
        :icon="item.icon"
      />
    </GmapMap>

      </b-card>
    </b-card-group>
  </div>
    
    <br>
    <Footer></Footer>
      
  </div>
</template>


<script>
const home = {lat: 1.2996575047427947, lng:103.77602467723008};

import Footer from './Footer.vue';
import TopNav from './TopNav.vue';
import fb from 'firebase';
import SignupBtn from './SignupBtn';

export default {
  components: {
    TopNav,
    Footer,
    SignupBtn
  },
  data() {
    return {
      email: '',
      address: '',
      imageURL: '',
      number: '',
      postal: '',
      imageURL2: '',
      center: home,
      markers: [{
          position: home,
          infoText: "<strong>Work</strong>",

        }],
    }
  },
  methods: {
    fetchItems: function() {
      fb.firestore().collection('aboutus').get().then(snapshot => {
        let item = {}
        snapshot.docs.forEach(doc => {
          item = doc.data()
          this.email = item.email
          this.address = item.address
          this.imageURL = item.imageURL
          this.number = item.number
          this.postal = item.postal
          this.imageURL2 = item.imageURL2
        })
      })
    }
  },
  created() {
    this.fetchItems()
  }
}
    Footer
</script>


<style scoped>


.vue-map-container {
  height: 330px;
  max-width: 992px;
  width: 100%;
}

#subutton {
   background-color: #87ebd3;
   color: black;
   border: none;
   transition-duration: 0.4s;
   width: 100px;
 }

 #subutton:hover {
   background-color: rgb(212, 212, 212);
   color: black;
 }

</style>
