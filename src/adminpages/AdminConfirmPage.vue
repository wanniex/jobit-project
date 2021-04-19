<template>
  <div>
    <AdminAftLoginTopNav></AdminAftLoginTopNav>
    <b-container fluid>
      <!-- Header -->
      <!-- <br><br><h1 style="text-align:center">Submit a donation approval</h1> -->
      <b-row align-h="center" class="mt-5 animated fadeInRight">
        <b-col cols="7">
          <b-img right fluid src="https://i.imgur.com/hxJp1vi.png"></b-img>
        </b-col>
        <b-col cols="5" align-self="center">
          <h1>Submission complete</h1>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <!-- Filler Column -->
        <b-col cols="1"></b-col>

        <!-- Donation image -->
        <b-col align-self="start" cols="5" class="animated fadeInLeft">
          <b-img
            center
            fluid
            src="https://firebasestorage.googleapis.com/v0/b/jobit-38c72.appspot.com/o/adminimages%2Fapproval-image.png?alt=media&token=e887049c-4de9-4eb0-88c0-31187c1f66a1"
            alt="Image 1"
          ></b-img>
        </b-col>

        <!-- Submitted donation approval details -->
        <b-col fluid align-self="end" cols="5">
          <b-card-group deck class="animated fadeInRight">
            <b-card>
              <b-card-text class="mt-2">
                <h4 style="text-align: center">
                  Submitted on {{this.myitems[0].submittime}}<br /><br>
                  Location: Buona Vista CC
                </h4>
                <br /><br>

                <p><strong>Submission Details:</strong></p>

                <ul style="list-style-type: none">
                  <li>Email: {{this.myitems[0].email}}</li><br>
                  <li>Number of clothings donated: {{this.myitems[0].addclothes}}</li><br>
                  <li>Staff Name: {{this.myitems[0].staffname}}</li><br>
                  <li>Points to be awarded: {{this.myitems[0].addpoints}}</li>
                </ul>
              </b-card-text>
            </b-card>
          </b-card-group>

          <b-row class="wow fadeInUp">
          <b-col>
          <b-button
            id="button"
            class="btn btn-primary mx-auto d-block mb-5 mt-5"
            @click="$router.push('AdminSubmitPage')"
            >Submit Another Approval</b-button
          >
          </b-col>
          <b-col>
          <b-button
            id="button"
            class="btn btn-primary mx-auto d-block mb-5 mt-5"
            @click="$router.push('AdminHomepage')"
            >Back to Dashboard</b-button
          >
          </b-col>
          </b-row>
        </b-col>

        <!-- Filler Column -->
        <b-col cols="1"></b-col>
      </b-row>
    </b-container>

    <AdminFooter style = "position: fixed; bottom:0; width: 100%;"></AdminFooter>
  </div>
</template>

<script>
import AdminFooter from "./AdminFooter.vue";
import AdminAftLoginTopNav from "./AdminAftLoginTopNav.vue";
import {WOW} from 'wowjs';

export default {
  components: {
    AdminFooter,
    AdminAftLoginTopNav,
  },

  data() {
    return {
      myitems: [],
    };
  },

  beforeMount() {
    this.myitems = this.$route.params.items;
  },

  mounted() {
    new WOW().init();
  }
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
  height: 60px;
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
