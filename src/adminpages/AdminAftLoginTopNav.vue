<template>
    <b-navbar id="test" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>
      <img
        src="../assets/clonateadmin.png"
        class="d-inline-block align-top"
        alt="Clonate"
      />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item id="linkone" to="/AdminHomePage">Dashboard</b-nav-item>
        <b-nav-item id="linktwo" to="/AdminSubmitPage">Approve Donation</b-nav-item>
      </b-navbar-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-avatar id="profilepic" to="/AdminProfilePage" v-bind:src="profilepic" class="mt-2 mr-2 ml-2" size="3rem"></b-avatar>
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
      
      fb.storage().ref('users/' + this.uid + '/profile.jpg').getDownloadURL().then(imgURL  => {
        this.profilepic = imgURL;
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
  padding-right: 3rem;
  padding-left: 0.8rem;
  color: rgb(235, 235, 235)!important;
  font-weight: 350;
}

.navbar-expand-lg .navbar-nav .nav-link:hover {
  padding-right: 3rem;
  padding-left: 0.5rem;
  color: rgb(0, 0, 0)!important;
  font-weight: 350;
}

#linkone {
  padding-right: 0rem;
  padding-left: 2.0rem;
}

#linkone:hover {
  padding-right: 1.3rem;
  padding-left: 1.2rem;
}

#linktwo {
  padding-right: 0rem;
  padding-left: 2.0rem;
}

#linktwo:hover {
  padding-right: 1.3rem;
  padding-left: 1.2rem;
}


 #sobutton {
   background-color:#fdf9f9!important;
   color: rgb(0, 0, 0);
   border: none;
   transition-duration: 0.4s;
   width: 100px;
   text-transform: none;
 }

 #sobutton:hover {
   background-color: rgb(212, 212, 212)!important;
   color: black;
 }

 #profilepic {
  color:white!important;
  background-color:grey!important;
}
</style>