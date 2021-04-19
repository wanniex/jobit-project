<template>
  <div>
    
  <TopNav></TopNav>
  <LoginForm></LoginForm>
  <Footer style = "position: fixed; bottom:0; width: 100%;"></Footer>

  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';
import TopNav from "./TopNav.vue";
import fb from "firebase";
import Footer from './Footer.vue';

export default {
  components: {
    LoginForm,
    Footer,
    TopNav,
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
      fb.auth()
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

</style>
