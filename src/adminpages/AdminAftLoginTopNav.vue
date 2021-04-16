<template>
    <b-navbar id="test" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>
      <img
        src="../assets/clonate-admin.png"
        class="d-inline-block align-top"
        alt="Clonate"
      />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/AdminHomePage">Dashboard</b-nav-item>
        <b-nav-item to="/AdminSubmitPage">Approve Donation</b-nav-item>
      </b-navbar-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-avatar to="/AdminProfilePage" v-bind:src="profilepic" class="mt-2 mr-2 ml-2" size="3rem"></b-avatar>
        <b-button pill @click="signout()" id="sobutton" class="mt-2 mr-2 ml-2">Sign Out</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
// import SignupBtn from "./SignupBtn.vue";
// import LoginBtn from "./LoginBtn.vue";
import fb from 'firebase'


export default {
  data() {
    return {
      profilepic: "",
      uid: null,
    }
  },
  components: {
    // loginBtn: LoginBtn,
    // signupBtn: SignupBtn,
  },
  methods: {
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

    getprofilepic() {
      console.log("im here")
      
      fb.storage().ref('users/' + this.uid + '/profile.jpg').getDownloadURL().then(imgURL  => {
        // document.getElementById('profilepic').src = imgURL;
        this.profilepic = imgURL;
        console.log(this.profilepic);
      })
    },

  },
  created() {
    this.uid = fb.auth().currentUser.uid;
    this.getprofilepic();
    // fb.firestore().collection("partners").doc(this.uid).get().then(doc => {
    //   this.placeimg = doc.data().imageURL;
    // })
  }
};
</script>


<style scoped>
#test {
  background-color: #2D8BBA !important;
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