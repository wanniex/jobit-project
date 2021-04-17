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
        <b-nav-item id="linkone" to="/">Home</b-nav-item>
        <b-nav-item id="linktwo" to="/Aboutus">About Us</b-nav-item>
        <b-nav-item id="linkthree" to="/Howitworks">How It Works</b-nav-item>
        <!-- <b-nav-item to="/AdminLogin">Admin</b-nav-item> -->
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
  padding-right: 2.0rem;
  padding-left: 0.8rem;
  color: rgb(71, 70, 70)!important;
  font-weight: 350;
}

.navbar-expand-lg .navbar-nav .nav-link:hover {
  padding-right: 2.0rem;
  padding-left: 0.5rem;
  color: rgb(255, 255, 255)!important;
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

#linkthree {
  padding-right: 0rem;
  padding-left: 2.0rem;
}

#linkthree:hover {
  padding-right: 1.3rem;
  padding-left: 1.2rem;
}

#subutton {
   background-color:#fdf9f9!important;
   color: black;
   border: none;
   transition-duration: 0.4s;
   width: 100px;
   text-transform: none;
 }

 #subutton:hover {
   background-color: rgb(212, 212, 212)!important;
   color: black;
 }
</style>