<template>
  <div>
    <admin-top-nav></admin-top-nav>
<b-container fluid>
  <b-row>
    <b-col>
      <b-img fluid src="https://i.imgur.com/CSCMbNn.jpg" alt="Image 1"></b-img>
    </b-col>
    <b-col fluid class="align-self-center">
      <b-form fluid @submit.prevent="pressed">
      <h1 style="text-align:center">Login as admin</h1>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter email"
          v-model="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2" class="mb-5">
        <b-form-input
          id="input-2"
          type="password"
          placeholder="Enter password"
          v-model="password"
          required
        ></b-form-input>
      </b-form-group>

      
    <!-- <b-button id="button" @click.native="$router.push('/SignUp')" pill class="mt-4 mr-2 ml-5 mb-5">Login</b-button><br> -->
    <!-- <button id="button" @click.native="$router.push('/SignUp')">Login</button><br><br> -->

    <b-button id="button" type="submit" class="btn btn-primary mx-auto d-block mb-5">Login</b-button>
      <router-link id="forgetpw" to=/ForgotPassword exact>I forgot my password</router-link><br>
      <p id = "text2">
                <span>Want to be our partner? </span>
                <span id = "text3">
                    <router-link id="text3" to=/Aboutus exact>Contact us today!</router-link>
                </span>             
            </p>
      </b-form>
    </b-col>
  </b-row>
</b-container>

<Footer></Footer>
  </div>
</template>

<script>
import auth from "firebase";
import Footer from '../components/Footer.vue';
import AdminTopNav from './AdminTopNav.vue';

export default {
  components: {
    Footer,
    AdminTopNav,
  },

  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data);
          this.$router.replace({ name: "Home" }); //changing the name here would redirect the user to the name of the page
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>


<style scoped>
 #button {
   background-color: #2D8BBA;
   color: #FFFF;
   border: none;
   transition-duration: 0.4s;
   width: 200px;
 }

 #button:hover {
   background-color: rgb(212, 212, 212);
   color: black;
 }

#forgetpw {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #616161;
}

#text2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
}

#text3 {
  color: #2D8BBA;
}

</style>
