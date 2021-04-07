<template>
    <div>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-img fluid src="https://i.imgur.com/fR3eGsd.jpg" alt="Image 1"></b-img>
      </b-col>
      
      <b-col fluid class="align-self-center">
        <b-form fluid @submit.prevent="pressed">
        <h1 style="text-align:center">Login</h1>
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
          <b-button type="submit" class="btn btn-primary mx-auto d-block">Login</b-button>
          <br><br>
          <router-link id="forgetpw" to=/ForgotPassword exact>I forgot my password</router-link><br>
          <p id = "text2">
            <span>Don't have an account? </span>
            <span id = "text3">
              <router-link id="text3" to=/SignUp exact>Join free today!</router-link>
            </span>             
          </p>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
    </div>
</template>

<script>
import fb from "../firebase";

export default {
  components: {},
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.$router.replace({ name: "HomePageAftLogin" }); //changing the name here would redirect the user to the name of the page
        })
        .catch((error) => {
          this.error = error;
          alert(this.error);
        });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 18px;
}

button {
  background-color: #87ebd3;
  color: #ffff;
  border: none;
  transition-duration: 0.4s;
  width: 200px;
}

button:hover {
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
  color: rgb(14, 156, 137);
}
</style>