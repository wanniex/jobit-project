<template>
  <div>
    <TopNavAftLogin></TopNavAftLogin>

    <b-container fluid class="mt-5 mb-5">
      <b-row align-h="center">
        <h1>Welcome Back!</h1>
      </b-row>

     <b-row align-h="center" class="mt-4">
        <h4 style="color:gray">Where would you like to donate?</h4>
      </b-row>

      <b-row align-h="center" class="mt-5 mb-5">
        <b-dropdown id="dropdown-1" text="Sort by" class="m-md-2">
          <b-dropdown-item>Ascending Order</b-dropdown-item>
          <b-dropdown-item>Descending Order</b-dropdown-item>
        </b-dropdown>
      </b-row>

      <b-row class="mt-5 mb-5"></b-row>

      <b-row class="mt-5">

        <!-- Location 1 -->
        <b-col>
          <b-card-group deck >
            <b-card
              img-src="https://i.imgur.com/SuTBBgo.jpg"
              img-alt="Card image"
              img-top
              img-height="300"
          img-width="200"
            >
              <b-card-text class="text-center">
                <h4>Ang Moh Kio CC</h4>
                Address: <br>795 Ang Mo Kio Ave 1, Singapore 569976<br><br>

                Opening Hours: <br>10am - 6pm, Monday to Sunday
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>

        <!-- Location 2 -->
        <b-col>
          <b-card-group deck>
            <b-card
              img-src="https://i.imgur.com/WYpN7Gq.jpg"
              img-alt="Card image"
              img-top
              img-height="300"
          img-width="200"
            >
              <b-card-text class="text-center">
                  <h4>Buona Vista CC</h4>
                Address: <br>36 Holland Dr, Singapore 270036<br><br>

                Opening Hours: <br>9am - 10pm, Monday to Sunday<br><br>
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>

        <!-- Location 3 -->
        <b-col>
          <b-card-group deck>
            <b-card
              img-src="https://i.imgur.com/D68dRe6.jpg"
              img-alt="Card image"
              img-top
              img-height="300"
          img-width="200"
            >

              <b-card-text class="text-center">
                  <h4>Clementi CC</h4>
                Address: <br>220 Clementi Ave 4, Singapore 129880<br><br>

                Opening Hours: <br>9am - 10pm, Monday to Sunday<br><br>
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import TopNavAftLogin from "./TopNavAftLogin.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
    TopNavAftLogin,
  },

  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {},
};
</script>


<style scoped>
</style>