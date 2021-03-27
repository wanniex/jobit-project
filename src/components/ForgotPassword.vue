<template>
  <div>
    <top-nav></top-nav>
    <b-container>
      <b-form fluid @submit.prevent="handleSubmit">
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

        <b-button type = "submit" onclick = "checkemail()" id="button" pill class="mt-4 ml-5 mb-5">Reset Password</b-button><br />
      </b-form>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import TopNav from "./TopNav.vue";

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
    handleSubmit() {},
  },
};
</script>

<style scoped>
#button {
  background-color: #87ebd3;
  color: black;
  border: none;
  transition-duration: 0.4s;
  width: 200px;
}

#button:hover {
  background-color: rgb(212, 212, 212);
  color: black;
}
</style>
