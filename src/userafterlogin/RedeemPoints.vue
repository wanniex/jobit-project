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
              body-class="d-flex flex-column"
              class="mb-5"
              fluid
              align="center"
              v-bind:footer="this.datapacket[0].name"
            >
            <b-img v-bind:src="this.datapacket[0].imageURL" fluid class="mb-4"></b-img>
            </b-card>
          </b-card-group>
        </b-col>

        <b-col cols="1"> </b-col>

        <b-col cols="5">
          <b-row align-h="center" class="mb-3">
            <h4 style="color: grey">You have {{ this.userpoints }} points</h4>
          </b-row>

          <!-- Redeem option 1 -->
          <b-card-group deck class="mb-4">
            <b-card body-class="d-flex flex-column"
              class="mb-4"
              fluid
              align="center">
              <b-card-text class="text-center">
                <h3 style="text-align: center">$10 e-voucher</h3>
                <br />
                <p style="text-align: center">Redeem with 1,000 points</p>
                <b-button
                  href="#"
                  id="button"
                  class="mt-auto"
                  v-on:click="pointsRedeemed(1000); redeem()"
                  >Redeem</b-button
                >
              </b-card-text>
            </b-card>
          </b-card-group>

          <!-- Redeem option 2 -->
          <b-card-group deck class="mb-4">
            <b-card body-class="d-flex flex-column"
              class="mb-4"
              fluid
              align="center">
              <b-card-text class="text-center">
                <h3 style="text-align: center">$20 e-voucher</h3>
                <br />
                <p style="text-align: center">Redeem with 1,800 points</p>
                <b-button
                  href="#"
                  id="button"
                  class="mt-auto"
                  v-on:click="pointsRedeemed(1800); redeem()"
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
              {{this.merchantname}} Online at www.{{this.merchantnamesmall}}.com.sg and {{this.merchantname}} Mobile App upon
              login, and for home delivery only.
            </li>
            <li>
              Only one promo code can be used for each transaction. {{this.merchantname}}
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
import fb from "../firebase";

export default {
  data() {
    return {
      datapacket: [],
      currUser: "",
      userid: "",
      userpoints: "",
      merchantname: "",
      merchantnamesmall: "",
      pointsrequired: ""
    }
  },
  
  components: {
    Footer,
    TopNavAftLogin,
  },

    methods: {
    fetchItems: function () {
      var merchantsRef = fb.firestore().collection("merchants");
      merchantsRef.get().then((snapshot) => {
        let item = {};
        snapshot.docs.forEach((doc) => {
          item = doc.data();
          if (doc.id == this.$route.params.id) {
          this.datapacket.push(item);
          this.merchantname = doc.data().name;
          this.merchantnamesmall = doc.data().name.charAt(0).toLowerCase() + this.merchantname.slice(1);
          }
        });
      });

      fb.firestore().collection('users').doc(this.userid).get().then(snapshot => {
        this.currUser = snapshot.data();
        this.userpoints = snapshot.data().points;
      })
    },

    redeem: function () {
      if (this.userpoints < this.pointsrequired) {
        alert('You do not have sufficient points');
      } else {
        this.userpoints = this.userpoints - this.pointsrequired;
        this.currUser.points = this.userpoints;
        alert('Your redemption is successful');

        // Updating new number of points user has in firebase
        fb.firestore().collection("users")
        .doc(this.userid)
        .set(this.currUser)
        // .then(() => this.$router.push({ path: "/HomePageAftLogin" }));
      }
    },

    pointsRedeemed: function(arg) {
      this.pointsrequired = arg;
    }
  },
  
  created() {
    this.userid = fb.auth().currentUser.uid;
    this.fetchItems();
  }
};
</script>


<style scoped>
#button {
  background-color: #87ebd3;
  color: #ffff;
  border: none;
  transition-duration: 0.4s;
}

#button:hover {
  background-color: rgb(212, 212, 212);
  color: black;
}
</style>