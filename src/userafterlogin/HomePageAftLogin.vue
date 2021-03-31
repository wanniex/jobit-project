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

      <b-row class="mt-5" v-for="ele in partners" :key="ele.name">

        <!-- Location 1 -->
        <ul id="ul">
        <b-col>
          <b-card-group deck>
            <b-card
              v-bind:img-src="ele.imageURL"
              img-alt="Card image"
              img-top
              img-height="300"
              img-width="200"
            >
              <b-card-text class="text-center">
                <h4>{{ele.name}}</h4>
                Address: <br>{{ele.address}}<br><br>

                Opening Hours: <br>{{ele.openinghrs}}
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
        </ul>

        <!-- Location 2 -->
        <!-- <b-col>
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
        </b-col> -->

        <!-- Location 3 -->
        <!-- <b-col>
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
        </b-col> -->
      </b-row>
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import TopNavAftLogin from "./TopNavAftLogin.vue";
import Footer from "../components/Footer.vue";
import fb from "../firebase"

export default {
  components: {
    Footer,
    TopNavAftLogin,
  },

  data() {
    return {
      partners: [],
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    fetchItems: function() {
      fb.firestore().collection('partners').get().then(snapshot => {
        let item = {}
        snapshot.docs.forEach(doc => {
          item = doc.data()
          this.partners.push(item)
        })
      })
    }
  },
  created() {
    this.fetchItems()
    console.log(this.partners)
  }
};
</script>


<style scoped>
#ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
#li {
  flex-grow: 1;
  flex-basis: 250px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
  font-weight: bold;
}
</style>