<template>
    <b-navbar id="test" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>
      <img
        src="../assets/clonate-logo.png"
        class="d-inline-block align-top"
        alt="Clonate"
      />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/Aboutus">About Us</b-nav-item>
      </b-navbar-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-avatar href="#foo" v-bind:src = "profilepic" id = "profilepic" class="mt-2 mr-2 ml-2" size="3rem"></b-avatar>
        <b-button pill id="sobutton" class="mt-2 mr-2 ml-2">Sign Out</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import fb from '../firebase.js'

export default {
  data() {
    return {
      uid: null,
      profilepic: "",
    }
  },
  components: {
  },
  methods: {
    getprofilepic() {
      alert('ingetprofilepic');
      fb.storage().ref('users/' + this.uid + '/profile.jpg').getDownloadURL().then(imgURL  => {
        // document.getElementById('profilepic').src = imgURL;
        this.profilepic = imgURL;
        alert(imgURL);
      })
    }

  },
  created() {
    this.uid = fb.auth().currentUser.uid;
    this.getprofilepic();
  }

};
</script>


<style scoped>
#test {
  background-color: #87ebd3 !important;
}

.navbar-dark .navbar-nav .nav-link {
  color: black;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding-right: 5rem;
  padding-left: 0.5rem;
}

#sobutton {
   background-color:#ffffff;
   color: black;
   border: none;
   transition-duration: 0.4s;
   width: 100px;
 }

 #sobutton:hover {
   background-color: rgb(212, 212, 212);
   color: black;
 }
</style>