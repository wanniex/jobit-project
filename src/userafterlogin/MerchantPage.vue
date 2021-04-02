<template>
  <div>
    <TopNavAftLogin></TopNavAftLogin>

    <b-container fluid class="mt-5 mb-5">
      <b-row align-h="center">
        <h1>Redeem your points</h1>
      </b-row>

      <b-row align-h="center" class="mt-4">
        <h4 style="color: gray">Choose your merchant:</h4>
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
          <b-card-group deck>
            <b-card
              body-class="d-flex flex-column"
              fluid
              header="Fairprice"
              align="center"
            >
              <!-- <b-card-text class="text-center">
                Fairprice
              </b-card-text> -->

              <b-img
                src="https://oroinc.com/b2b-ecommerce/wp-content/uploads/sites/3/2019/07/fairprice-1500x1500-1.png"
                fluid
                class="mb-4"
              ></b-img>

              <b-button href="#" id="button" class="mt-auto">Select</b-button>
            </b-card>

            <b-card
              fluid
              body-class="d-flex flex-column"
              header="Pizza Hut"
              align="center"
            >
              <!-- <b-row class="mt-auto" align-h="center">
                Pizza Hut
                              img-src="https://i.imgur.com/fuUy3Ah.png"
              img-alt="Card image"
              img-top
              </b-row> -->

              <b-img
                src="https://i.imgur.com/fuUy3Ah.png"
                fluid
                class="mb-4"
              ></b-img>
              <b-button href="#" id="button" class="mt-auto">Select</b-button>
            </b-card>

            <b-card
              fluid
              body-class="d-flex flex-column"
              header="Starbucks"
              align="center"
            >
              <b-img
                src="https://i.imgur.com/yfQYUIm.png"
                fluid
                class="mb-4"
              ></b-img>
              <b-button href="#" id="button" class="mt-auto">Select</b-button>
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
};
</script>


<style scoped>
#button {
  background-color: #87ebd3;
  color: #ffff;
  border: none;
  transition-duration: 0.4s;
  width: 200px;
  align-self: center;
}

#button:hover {
  background-color: rgb(212, 212, 212);
  color: black;
}
</style>