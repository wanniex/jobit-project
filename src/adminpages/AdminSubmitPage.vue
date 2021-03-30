<template>
  <div>
    <AdminAftLoginTopNav></AdminAftLoginTopNav>
    <b-container fluid>
      <!-- Header -->
      <!-- <br><br><h1 style="text-align:center">Submit a donation approval</h1> -->
      <b-row align-h="center" class="mt-5">
        <h1>Submit a donation approval</h1>
      </b-row>

      <b-row>
        <!-- Filler Column -->
        <b-col cols="1"></b-col>

        <!-- Donation image -->
        <b-col align-self="center" cols="5">
          <b-img
            center
            fluid
            src="https://i.imgur.com/1ZeFo1N.png"
            alt="Image 1"
          ></b-img>
        </b-col>

        <!-- Form to submit donation approval -->
        <b-col fluid align-self="center" cols="5">
          <b-form fluid @submit.prevent="pressed">
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

            <b-form-group
              id="input-group-2"
              label="Number of clothings donated:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                placeholder="Enter a number"
                type="number"
                v-model="clothesnum"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Staff Name:"
              label-for="input-3"
              class="mb-5"
            >
              <b-form-input
                id="input-3"
                placeholder="Enter Staff Name"
                v-model="staffname"
                required
              ></b-form-input>
            </b-form-group>

            <b-button
              id="button"
              type="submit"
              class="btn btn-primary mx-auto d-block mb-5"
              >Login</b-button
            >
          </b-form>
        </b-col>

        <!-- Filler Column -->
        <b-col cols="1"></b-col>
      </b-row>
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import AdminAftLoginTopNav from "./AdminAftLoginTopNav.vue";

export default {
  components: {
    Footer,
    AdminAftLoginTopNav,
  },

  data() {
    return {
      email: "",
      clothesnum: "",
      staffname: "",
    };
  },
};
</script>


<style scoped>
#button {
  background-color: #2d8bba;
  color: #ffff;
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
  color: #2d8bba;
}
</style>