<template>
  <div>
    <AdminAftLoginTopNav></AdminAftLoginTopNav>
    <b-container fluid>
      <!-- Header -->
      <!-- <br><br><h1 style="text-align:center">Submit a donation approval</h1> -->
      <b-row align-h="center" class="mt-5 animated fadeInDown">
        <h1>Submit a donation approval</h1>
      </b-row>

      <b-row>
        <!-- Filler Column -->
        <b-col cols="1"></b-col>

        <!-- Donation image -->
        <b-col align-self="center" cols="5" class="animated fadeInLeft">
          <b-img
            center
            fluid
            src="https://firebasestorage.googleapis.com/v0/b/jobit-38c72.appspot.com/o/adminimages%2Fapproval-image1.png?alt=media&token=bfb46cab-c9e5-48f7-9d15-4ff97c43de4d"
            alt="Image 1"
          ></b-img>
        </b-col>

        <!-- Form to submit donation approval -->
        <b-col fluid align-self="center" cols="5" class="animated fadeInRight">
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
                v-model="addclothes"
                type="number"
                min=1
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
      <div style = "margin-bottom: 50px;"/>
    </b-container>

    <AdminFooter style = "position: fixed; bottom:0; width: 100%;"></AdminFooter>
  </div>
</template>

<script>
import AdminAftLoginTopNav from "./AdminAftLoginTopNav.vue";
import fb from "firebase";
import AdminFooter from "./AdminFooter.vue";

export default {
  components: {
    AdminFooter,
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
      submittime: "",
      addpoints: "",
    };
  },
  methods: {
    onsubmit() {
      this.email = document.getElementById("email_input").value;
      this.addclothes = document.getElementById("count_input").value;
      this.staffname = document.getElementById("staff_input").value;

      fb.firestore()
        .collection("useremail")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            // User exists in database
            this.donateuid = doc.data().uid;
          } else {
            // user does not exist
            // doc.data() will be undefined in this case
            alert("User does not exist!");

            // Resets input of fields if user does not exist
            this.email = "";
            this.addclothes = null;
            this.staffname = "";
          }
        })

        .then(() => {
          fb.firestore()
            .collection("users")
            .doc(this.donateuid)
            .get()
            .then((doc) => {
              this.donatecount = doc.data().clothes_donated;
              this.donatepoints = doc.data().points;
            })
            .then(() => {
              this.addpoints = Number(Number(this.addclothes) * 100);
              this.donatepoints = Number(this.donatepoints) + this.addpoints;
              this.donatecount = Number(this.donatecount) + Number(this.addclothes);

              // Get donation date & time
              this.submittime = new Date().toLocaleString("en-SG", {
                timeZone: "Asia/Singapore",
                hour12: true,
              });

              fb.firestore()
                .collection("users")
                .doc(this.donateuid)
                .update({
                  clothes_donated: Number(this.donatecount),
                  points: Number(this.donatepoints),
                }).then(() => {
                    fb.firestore().collection("partners").doc(this.partneruid).get().then(partner => {
                      var d, curmonth, curcount, curarr;
                      d = new Date();
                      curmonth = d.getMonth();
                      curarr = partner.data().clothes_donated;
                      curcount = curarr[curmonth];
                     
                      curcount = Number(curcount) + Number(this.addclothes);
                      curarr[curmonth] = curcount;
                      
                      fb.firestore().collection('partners').doc(this.partneruid).update({
                        clothes_donated: curarr,
                      }).then(() => {
                      alert("clothes updated!");
                      this.$router.push({
                        name: "AdminConfirmPage",
                        params: {
                          items: [
                            {
                              submittime: this.submittime,
                              email: this.email,
                              addclothes: this.addclothes,
                              addpoints: this.addpoints,
                              staffname: this.staffname,
                            },
                          ],
                        },
                      });
                    });
                  })
                })

            });
        });
    },
  },
  created() {
    
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.partneruid = fb.auth().currentUser.uid;
      } else {
        // No user is signed in.
      }
    });

  },
};
</script>


<style scoped>
#button {
  background-color: #2d8bba!important;
  color: #ffffff!important;
  border: none;
  transition-duration: 0.4s;
  text-transform: none;
  width:200px;
}

#button:hover {
  background-color: rgb(212, 212, 212)!important;
  color: rgb(0, 0, 0)!important;
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