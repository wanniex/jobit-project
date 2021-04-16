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
      </b-card>

      <b-card title="Contact Us" class="text-center" v-bind:img-src="this.imageURL" img-alt="Card image" img-bottom>
        <b-card-text>
          Email: {{this.email}} <br>Number: {{this.number}}<br><br>
          Address:<br>{{this.address}},<br>{{this.postal}}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
    
    <br>
    <Footer></Footer>
      
  </div>
</template>


<script>
import Footer from './Footer.vue';
import TopNav from './TopNav.vue';
import fb from 'firebase'

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
