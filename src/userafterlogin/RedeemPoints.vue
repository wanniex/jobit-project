<template>
  <div>
    <TopNavAftLogin></TopNavAftLogin>

    <b-container fluid class="mt-5 mb-5">
      <b-row align-h="center">
        <h1>Redeem your points</h1>
      </b-row>

      <!-- <b-row class="mt-5 mb-5" align-h="center">
          <h4 style="color:grey">You have 2,400 points</h4>
      </b-row> -->

      <b-row class="mt-5">
        <b-col cols="1"> </b-col>

        <b-col cols="4">
          <b-card-group deck>
            <b-card
              img-src="https://oroinc.com/b2b-ecommerce/wp-content/uploads/sites/3/2019/07/fairprice-1500x1500-1.png"
              img-alt="Card image"
              img-top
              img-height="500"
              img-width="200"
            >
              <b-card-text class="text-center">
                <h4>FairPrice</h4>
                <br />
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>

        <b-col cols="1"> </b-col>

        <b-col cols="5">
          <b-row align-h="center" class="mb-3">
            <h4 style="color: grey">You have 2,400 points</h4>
          </b-row>

          <!-- Redeem option 1 -->
          <b-card-group deck class="mb-4">
            <b-card>
              <b-card-text class="text-center">
                <h3 style="text-align: center">$10 e-voucher</h3>
                <br />
                <p style="text-align: center">Redeem with 1,000 points</p>
                <b-button
                  href="#"
                  id="button"
                  class="btn btn-primary mx-auto d-block"
                  >Redeem</b-button
                >
              </b-card-text>
            </b-card>
          </b-card-group>

          <!-- Redeem option 2 -->
          <b-card-group deck class="mb-4">
            <b-card>
              <b-card-text class="text-center">
                <h3 style="text-align: center">$20 e-voucher</h3>
                <br />
                <p style="text-align: center">Redeem with 1,800 points</p>
                <b-button
                  href="#"
                  id="button"
                  class="btn btn-primary mx-auto d-block"
                  >Redeem</b-button
                >
              </b-card-text>
            </b-card>
          </b-card-group>

          <p style="text-align: center">
            The e-voucher will be sent to your email.
          </p>
          <br />
          <p><strong>Terms and conditions:</strong></p>

          <ul>
            <li>
              You (the Purchaser) are responsible to communicate the following
              terms of use to recipients of the e-Vouchers.
            </li>
            <li>
              Redemption of promo code is applicable only for purchases made on
              Fairprice Online at www.fairprice.com.sg and Fairprice Mobile App upon
              login, and for home delivery only.
            </li>
            <li>
              Only one promo code can be used for each transaction. Fairprice
              reserves the right to reject any order that has violated this.
              Promo code is to be used for one-time redemption only.
            </li>
          </ul>
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
}

#button:hover {
  background-color: rgb(212, 212, 212);
  color: black;
}
</style>