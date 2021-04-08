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
        <b-nav-item to="/HomePageAftLogin">Home</b-nav-item>
        <b-nav-item to="/MerchantPage">Redeem Points</b-nav-item>
      </b-navbar-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-avatar v-bind:src = "profilepic" to="/ProfilePage" id = "profilepic" class="mt-2 mr-2 ml-2" size="3rem"></b-avatar>
        <b-button pill @click="signout()" id="sobutton" class="mt-2 mr-2 ml-2">Sign Out</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import fb from 'firebase'


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
      fb.storage().ref('users/' + this.uid + '/profile.jpg').getDownloadURL().then(imgURL  => {
        // document.getElementById('profilepic').src = imgURL;
        this.profilepic = imgURL;
      })
    },
    signout() {
      fb.auth().signOut().then(() => {
        alert('Successfully logged out');
        this.$router.push('/');
      })
      .catch(error => {
        alert(error.message);
        this.$router.push('/');
      });
    },

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