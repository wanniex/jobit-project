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
        <b-nav-item to="/AdminLogin">Admin</b-nav-item>
      </b-navbar-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <signup-btn id="subutton" @click.native="$router.push('/SignUp')">Sign Up</signup-btn>
        <login-btn @click.native="$router.push('/Login')">Login</login-btn>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import SignupBtn from "./SignupBtn.vue";
import LoginBtn from "./LoginBtn.vue";

export default {
  components: {
    loginBtn: LoginBtn,
    signupBtn: SignupBtn,
  },
  methods: {
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

#subutton {
   background-color:#ffffff;
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