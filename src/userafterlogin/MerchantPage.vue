<template>
  <div>
    <TopNavAftLogin></TopNavAftLogin>

    <b-container fluid class="mt-5 mb-5">
      <b-row align-h="center">
        <h1>Redeem your points</h1>
      </b-row>

     <b-row align-h="center" class="mt-4">
        <h4 style="color:gray">Choose your merchant:</h4>
      </b-row>

      <b-row align-h="center" class="mt-5 mb-5">
        <b-dropdown id="dropdown-1" text="Sort by" class="m-md-2">
          <b-dropdown-item>Ascending Order</b-dropdown-item>
          <b-dropdown-item>Descending Order</b-dropdown-item>
        </b-dropdown>
      </b-row>

      <b-row class="mt-5 mb-5"></b-row>

      <b-row class="mt-5">
        <b-col>
          <b-card-group deck >
            <b-card
              img-src="https://oroinc.com/b2b-ecommerce/wp-content/uploads/sites/3/2019/07/fairprice-1500x1500-1.png"
              img-alt="Card image"
              img-top
              img-height="500"
          img-width="200"
            >

              <b-card-text class="text-center">
                <h4>FairPrice</h4><br>
              </b-card-text>
              <b-button href="#" id="button" class="btn btn-primary mx-auto d-block">Select</b-button>
            </b-card>
          </b-card-group>
        </b-col>

        <b-col>
          <b-card-group deck>
            <b-card
              img-src="https://i.imgur.com/fuUy3Ah.png"
              img-alt="Card image"
              img-top
              img-height="500"
          img-width="200"
            >
              <b-card-text class="text-center">
                  <h4>Pizza Hut</h4><br>
              </b-card-text>
              <b-button href="#" id="button" class="btn btn-primary mx-auto d-block">Select</b-button>
            </b-card>
          </b-card-group>
        </b-col>

        <b-col>
          <b-card-group deck>
            <b-card
              img-src="https://i.imgur.com/yfQYUIm.png"
              img-alt="Card image"
              img-top
              img-height="500"
          img-width="200"
            >

              <b-card-text class="text-center">
                  <h4>Starbucks Coffee</h4><br>
              </b-card-text>
              <b-button href="#" id="button" class="btn btn-primary mx-auto d-block">Select</b-button>
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

#button {
  background-color: #87ebd3;
  color: #ffff;
  border: none;
  transition-duration: 0.4s;
  width: 200px;
}

#button:hover {
  background-color: rgb(212, 212, 212);
  color: black;
}
</style>