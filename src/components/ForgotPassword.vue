<template>
  <div>
    <top-nav></top-nav>
    <b-container class="animated fadeInLeft">
      <b-form fluid @submit.prevent="forgetpwbtn">
        <h1 style="text-align: center">Forgot Password?</h1><br>
        <p style="text-align: center">Please enter your email address below.</p>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          class="mt-4"
        >
          <b-form-input
            id="input-1"
            type="email"
            placeholder="Enter email"
            v-model="email"
            required
          ></b-form-input>
        </b-form-group>

<b-row align-h="center" class="mr-3">
        <b-button type = "submit" id="button" pill class="mt-4 ml-5 mb-5">Reset Password</b-button><br />
</b-row>
      </b-form>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import TopNav from "./TopNav.vue";
import fb from 'firebase'

export default {
  name: "ForgotPassword",
  components: {
    Footer,
    TopNav,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    forgetpwbtn() {
      const auth = fb.auth();
      auth.sendPasswordResetEmail(this.email).then(function() {
        // Email sent.
        //alert("Reset password link has been sent to your email!")
      })
      .catch(function(error) {        
        alert(error);
      })
       .then( 
            this.$router.push('/PasswordResetLink') //changing the name here would redirect the user to the name of the page
          );
    },
  },
};
</script>

<style scoped>
#button {
  background-color: #87ebd3!important;
  color: white!important;
  border: none;
  transition-duration: 0.4s;
  width: 200px;
  text-transform: none;
}

#button:hover {
  background-color: rgb(212, 212, 212)!important;
  color: black!important;
}
</style>
