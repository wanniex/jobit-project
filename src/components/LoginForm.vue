<template>
    <div>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-img fluid src="https://firebasestorage.googleapis.com/v0/b/jobit-38c72.appspot.com/o/clonateimages%2Fclothing-donation-image.jpg?alt=media&token=db99a6a3-9862-449d-808e-7849abcd876e" alt="Image 1" id="image" class="animated fadeInLeft"></b-img>
      </b-col>
      
      <b-col fluid class="align-self-center animated fadeInRight">
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
              <router-link id="text3" to=/SignUp exact>Join us today!</router-link>
            </span>             
          </p>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
    </div>
</template>

<script>
import fb from "firebase";

export default {
  components: {},
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },

  created() {
    fb.auth().onAuthStateChanged(userAuth => {
      if (userAuth) {
        fb.auth()
          .currentUser.getIdTokenResult()
          .then(tokenResult => {
            console.log(tokenResult.claims);
          });   
      }
    })
  },

  methods: {
    async pressed() {
      fb.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            fb
            .auth()
            .currentUser
            .getIdTokenResult()
            .then(({claims}) => {
              if (claims.admin) {
                this.$router.push('AdminHomePage')
              } else {
                this.$router.push('HomePageAftLogin')
              }
            }).catch((error) => {alert(error);});
          }).catch((error) => {alert(error);});
    },
  },
};
</script>


<style scoped>
.error {
  color: red;
  font-size: 18px;
}

#image {
  width:100%;
  height: 100%;
}

button {
  background-color: #87ebd3!important;
  color: rgb(255, 255, 255)!important;
  border: none;
  transition-duration: 0.4s;
  width: 200px;
  text-transform: none;
}

button:hover {
  background-color: rgb(212, 212, 212)!important;
  color: black!important;
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