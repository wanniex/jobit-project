<template>
  <div>
    <TopNavAftLogin></TopNavAftLogin>

    <b-container fluid class="mt-5 mb-5">
      <b-row align-h="center">
        <h1>Welcome Back, {{username}}!</h1>
      </b-row>

     <b-row align-h="center" class="mt-4">
        <h4 style="color:gray">Where would you like to donate?</h4>
      </b-row>

      <b-row align-h="center" class="mt-5 mb-5">
                <!-- Dropdown for sorting -->
        
        <div class="mr-2">Sort by:</div>
        <b-form-select v-model="selected" :options="options" id="formformat"
          >Sort by</b-form-select
        >
      </b-row>

      <b-row class="mt-5 mb-5"></b-row>

      <b-row class="mt-5 align-items-stretch">

        <b-col v-for="ele in sortedArray" :key="ele.name" cols="4" class="mb-3">
          <b-card-group deck class="h-100">
            <b-card
              v-bind:img-src="ele.imageURL"
              body-class="d-flex flex-column"
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
      </b-row>
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import TopNavAftLogin from "./TopNavAftLogin.vue";
import Footer from "../components/Footer.vue";
import fb from "firebase"

export default {
  components: {
    Footer,
    TopNavAftLogin,
  },

  data() {
    return {
      partners: [],
      selected: "Ascending",
      username: "",
      userid: "",
      options: [
        {
          value: "Ascending",
          text: "Ascending",
        },
        {
          value: "Descending",
          text: "Descending",
        },
      ],
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
      }),
      fb.firestore().collection('users').doc(this.userid).get().then(snapshot => {
        console.log(this.userid)
        this.username = snapshot.data().name;
        this.username = this.username.charAt(0).toUpperCase() + this.username.slice(1);
      })
    }
  },

  computed: {
    sortedArray: function () {
      console.log("new");
      var newArray = this.partners;
      function compareAsc(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }

      function compareDesc(a, b) {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      }
      console.log(newArray);
      if (this.selected == "Ascending") {
        return newArray.sort(compareAsc);
      } else {
        return newArray.sort(compareDesc);
      }
    },
  },


  created() {
    this.userid = fb.auth().currentUser.uid;
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

#formformat {
  width: 10%;
}
</style>