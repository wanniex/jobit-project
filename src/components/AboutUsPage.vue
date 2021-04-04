<template>
  <div>
      <TopNav></TopNav>

       <div>
    <b-card-group deck class="ml-2 mr-2 mt-5">
      <b-card title="About Us" class="text-center" v-bind:img-src="imageURL2" img-alt="Card image" img-top>
        <b-card-text>
          Clonate aims to encourage the donation of clothing for the needy, <br> reduce textile waste and empower communities. 
          <br><br>Join us in our cause today.
        </b-card-text>
      </b-card>

      <b-card title="Contact Us" class="text-center" v-bind:img-src="this.imageURL" img-alt="Card image" img-bottom>
        <b-card-text>
          Email: {{this.email}} <br>Number: {{this.number}}<br><br>
          Address:<br>{{this.address}},<br>{{this.postal}}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>

      
<!-- 
          <div class="vl"></div>

    <div class="split left">
      <div class="centered">
        <h1 id="aboutusheading">About Us</h1>
        <p id="aboutus">Clonate aims to encourage the donation of clothing for the needy, reduce textile waste and empower communities. Join us in our cause today.</p>
        <img id="plant" src="../assets/soil.png"/>
      </div>
    </div>


    
    <div class="split right">
        <div class="centered">  
            <h1 id="contactusheading">Contact Us</h1>
            <p id="email">Email: contact@clonate.com<br>Number: +65 6516 6666</p>
            <p id="address">Address:<br>21 Lower Kent Ridge Road,<br>Singapore 119077</p>
            <img id="map" src="../assets/clonatemap.png"/>
      </div>
    </div> -->

    <br>
    <Footer></Footer>
      
  </div>
</template>


<script>
import Footer from './Footer.vue';
import TopNav from './TopNav.vue';
import fb from '../firebase'

export default {
  components: {
    TopNav,
    Footer,
  },
  data() {
    return {
      email: '',
      address: '',
      imageURL: '',
      number: '',
      postal: '',
      imageURL2: '',
    }
  },
  methods: {
    fetchItems: function() {
      fb.firestore().collection('aboutus').get().then(snapshot => {
        let item = {}
        snapshot.docs.forEach(doc => {
          console.log(doc.data())
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
    console.log(this.email)
  }
}
    Footer
</script>


<style scoped>





</style>
