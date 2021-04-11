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
          <b-form fluid @submit.prevent="onsubmit">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="email_input"
            >
              <b-form-input
                id="email_input"
                type="email"
                placeholder="Enter email"
                v-model="email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Number of clothings donated:"
              label-for="count_input"
            >
              <b-form-input
                id="count_input"
                placeholder="Enter a number"
                type="number"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Staff Name:"
              label-for="staff_input"
              class="mb-5"
            >
              <b-form-input
                id="staff_input"
                placeholder="Enter Staff Name"
                v-model="staffname"
                required
              ></b-form-input>
            </b-form-group>

            <b-button
              id="button"
              type="submit"
              class="btn btn-primary mx-auto d-block mb-5"
              >Submit</b-button
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
import fb from 'firebase';

export default {
  components: {
    Footer,
    AdminAftLoginTopNav,
  },

  data() {
    return {
      email: "",
      addclothes: "",
      staffname: "",
      donateuid: "",
      donatecount: 0,
      partneruid: "",
    };
  },
  methods: {
    onsubmit() {
      
      this.email = document.getElementById("email_input").value;
      this.addclothes = document.getElementById("count_input").value;
      this.staffname = document.getElementById("staff_input").value;

      fb.firestore().collection("useremail").doc(this.email).get().then(doc => {
        this.donateuid = doc.data().uid
      }).then(() => {
        fb.firestore().collection("users").doc(this.donateuid).get().then(doc =>{
          this.donatecount = doc.data().clothes_donated;
          this.donatepoints = doc.data().points;
        }).then(() => {
          this.donatepoints = Number(this.donatepoints) + Number(Number(this.donatecount) * 300);
          this.donatecount = Number(this.donatecount) + Number(this.addclothes);
          
          fb.firestore().collection("users").doc(this.donateuid).update({
            "clothes_donated": Number(this.donatecount),
            "points": Number(this.donatepoints)
          }).then(() => {
            fb.firestore().collection("partners").doc(this.partneruid).get().then(partner => {
              var d, curmonth, curcount, curarr;
              d = new Date();
              curmonth = d.getMonth();
              curarr = partner.data().clothes_donated;
              curcount = curarr[curmonth];
              curcount = Number(curcount) + Number(this.donatecount);
              curarr[curmonth] = curcount;

            })
            
          }).then(() => {
            alert("clothes updated!");
            this.$router.push("/AdminHomepage");
          })
        })
      })
      
    }
  },
  created() {
    this.partneruid = fb.auth().currentUser.uid;
    
  }
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