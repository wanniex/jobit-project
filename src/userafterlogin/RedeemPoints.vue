<template>
  <div>
    <TopNavAftLogin></TopNavAftLogin>

    <b-container fluid class="mt-5 mb-5 animated zoomIn">
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
                  v-on:click="openForm(); pointsRedeemed(1000);"
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
                  v-on:click="openForm(); pointsRedeemed(1800);"
                  >Redeem</b-button
                >
              </b-card-text>
            </b-card>
          </b-card-group>
          </b-col>
          <div style = "padding: 50px;">
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
              {{this.merchantname}} Online at {{this.merchantlink}} and {{this.merchantname}} Mobile App upon
              login, and for home delivery only.
            </li>
            <li>
              Only one promo code can be used for each transaction. {{this.merchantname}}
              reserves the right to reject any order that has violated this.
              Promo code is to be used for one-time redemption only.
            </li>
          </ul>
          </div>
        
      </b-row>
    </b-container>
    <div class="form-popup" id="setgoal">
      <h3 style = "font-family: Helvetica, sans-serif; text-align: center; padding: 20px;">Are you sure you would like to claim {{vouchervalue}} for {{pointsrequired}} points?</h3>
      <button type="submit" class="btn" @click = "redeem(); makeid(9); sendEmail()">Yes</button>
      <br/>
      <button type="button" class="btn cancel" @click="closeForm()">No</button>
      
    </div>

    <FooterAftLogin></FooterAftLogin>
  </div>
</template>

<script>
import TopNavAftLogin from "./TopNavAftLogin.vue";
import FooterAftLogin from './FooterAftLogin.vue';
import fb from "firebase";
import emailjs from "emailjs-com";
import {WOW} from 'wowjs';

export default {
  data() {
    return {
      datapacket: [],
      currUser: "",
      userid: "",
      userpoints: "",
      merchantname: "",
      merchantlink: "",
      pointsrequired: "",
      username: "",
      email: "",
      vouchercode: "",
      vouchervalue: "",
    }
  },
  
  components: {
    FooterAftLogin,
    TopNavAftLogin,
  },

    methods: {
    openForm() {
      document.getElementById("setgoal").style.display = "block";
    },

    closeForm() {
      document.getElementById("setgoal").style.display = "none";
    },
    
    fetchItems: function (user) {      
      this.userid = user.uid;
      fb.firestore().collection('users').doc(user.uid).get().then(snapshot => {
        this.currUser = snapshot.data();
        this.userpoints = snapshot.data().points;
      })

      var merchantsRef = fb.firestore().collection("merchants");
      merchantsRef.get().then((snapshot) => {
        let item = {};
        snapshot.docs.forEach((doc) => {
          item = doc.data();
          if (doc.id == this.$route.query.id) {
          this.datapacket.push(item);
          this.merchantname = doc.data().name;
          this.merchantlink = doc.data().link;
          }
        });
      });


    },

    redeem: function () {
      if (this.userpoints < this.pointsrequired) {
        alert('You do not have sufficient points');
      } else {
        this.userpoints = this.userpoints - this.pointsrequired;
        this.currUser.points = this.userpoints;
        alert("Your redemption is successful!\nThe voucher has been sent to your email! :)");

        fb.firestore().collection("users")
        .doc(this.userid)
        .set(this.currUser)     
        this.username = this.currUser.name;
        this.email = this.currUser.email;
      }
      this.closeForm();
    },

    pointsRedeemed: function(arg) {
      this.pointsrequired = arg;
      this.vouchervalue = this.pointsrequired == 1000 ? "$10" : "$20"
    },

    sendEmail: function() {
      var templateParams = {
        to_name: this.username,
        to_email: this.email,
        vouchercode: this.vouchercode,
        merchantname: this.merchantname,
        merchantlink: this.merchantlink,
        vouchervalue: this.pointsrequired == 1000 ? "$10" : "$20",
      };
      try {
        emailjs.send(
          "service_llib5v9",
          "template_el2m4wc",
          templateParams,
          "user_tFlL3d9QPsaCEnksoYdjF"
        );
      } catch (error) {
        console.log({ error });
      }
    },

    makeid: function(length) {
      var result = [];
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result.push(
          characters.charAt(Math.floor(Math.random() * charactersLength))
        );
      }
      this.vouchercode = result.join("");
    },
  },
  
  // lifecycle
  mounted() {
  new WOW().init();
  },

  created() {
    // this.userid = fb.auth().currentUser.uid;

     fb.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    this.fetchItems(user);
  } else {
    // No user is signed in.
  }
});
  }
};
</script>


<style scoped>

#button {
  background-color: #87ebd3!important;
  color: #4d4b4b!important;
  border: none;
  transition-duration: 0.4s;
  text-transform: none;
}

#button:hover {
  background-color: rgb(212, 212, 212)!important;
  color: rgb(255, 255, 255)!important;
}


.form-popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* bring your own prefixes */
  /* border: 3px solid #f1f1f1; */
  z-index: 9;
  height: 50%;
}
.open-button:hover {
  opacity: 1;
  background-color: #17df7b;
  /* 2D8BBA */
}

.form-popup .btn:hover {
    opacity: 1;
    background-color: #17df7b;
}

/* submit button */
.form-popup .btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  width: 30%;
  opacity: 0.8;
  transform: translateX(120%);
  margin: 20px 0px 0px 0px; /*top right bot left */
}

/* Add a red background color to the cancel button */
.form-popup .cancel {
  background-color: rgb(192, 35, 35);
}

.form-popup .cancel:hover {
    opacity: 1;
    background-color: red;
}

.form-popup {
  padding: 10px;
  background-color: white;
}

li {
  margin-bottom: 20px;
}
</style>