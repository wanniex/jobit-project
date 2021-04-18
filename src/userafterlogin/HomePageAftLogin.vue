<template>
  <div>
    <TopNavAftLogin></TopNavAftLogin>

    <b-container fluid class="mt-5 mb-5">
      <b-row align-h="center">
        <h1 class="animated fadeInUp delay-1s fast">Welcome Back, {{username}}!</h1>
      </b-row>

     <b-row align-h="center" class="mt-4">
        <h4 style="color:gray" class="animated fadeInUp delay-1s fast">Where would you like to donate?</h4>
      </b-row>

      <b-row align-h="center" class="mt-5 mb-5 animated fadeInUp delay-1s fast">
                <!-- Dropdown for sorting -->
                <b-col align-v="center" class="mr-2" cols="1">
          <b-row align-h="end" class="mt-1">
          <p>Filter by:</p>
          </b-row>
        </b-col>
        <b-col align-v="center"  cols="2">
          <b-row align-h="start">
        <b-form-select v-model="filterselect" :options="filteroptions" id="formformat"
          >Filter by</b-form-select
        >
          </b-row>
        </b-col>
        
        
        <b-col align-v="center" class="mr-2"  cols="1">
          <b-row align-h="end" class="mt-1">
          <p>Sort by:</p>
          </b-row>
        </b-col>
        <b-col align-v="center" cols="2">
          <b-row align-h="start">
        <b-form-select v-model="selected" :options="options" id="formformat"
          >Sort by</b-form-select>
          </b-row>
        </b-col>

      </b-row>



      <b-row class="mt-5 mb-5"></b-row>

      <b-row class="mt-5 align-items-stretch animated fadeInLeft slow">

        <b-col v-for="ele in sortedArray" :key="ele.name" cols="4" class="mb-3">
          <b-card-group deck class="h-100">
            <a v-bind:href = "ele.map_link" target = "_blank">
            <b-card
              v-bind:img-src="ele.imageURL"
              body-class="d-flex flex-column"
              img-alt="Card image"
              img-top
              img-height="300"
              img-width="200"
            >

              <b-card-text style = "color: black;" class="text-center">
                <h4>{{ele.name}}</h4>
                Address: <br>{{ele.address}}<br><br>

                Opening Hours: <br>{{ele.openinghrs}}
              </b-card-text>
            </b-card>
            </a>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>

    <FooterAftLogin></FooterAftLogin>
  </div>
</template>

<script>
import TopNavAftLogin from "./TopNavAftLogin.vue";
import FooterAftLogin from './FooterAftLogin.vue';
import fb from "firebase";
import {WOW} from 'wowjs';

export default {
  components: {
    FooterAftLogin,
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
    filteroptions: [
      {
        value: "All",
        text: "All"
      },
      {
        value: "Community Clubs",
        text: "Community Clubs"
      },
      {
        value: "Sports Centres",
        text: "Sports Centres"
      }
    ],
    filterselect: "All"
    };
  },
  methods: {
    fetchPlaces: function() {
fb.firestore().collection('partners').get().then(snapshot => {
        let item = {}
        snapshot.docs.forEach(doc => {
          item = doc.data()
          this.partners.push(item)
        })
      });
    },
    fetchItems: function(user) {
      this.userid = user.uid;
      fb.firestore().collection('users').doc(this.userid).get().then(snapshot => {
        this.username = snapshot.data().name;
        this.username = this.username.charAt(0).toUpperCase() + this.username.slice(1);
      })
    }
  },

  computed: {
    sortedArray: function () {
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
      if (this.selected == "Ascending" && this.filterselect == "All") {
        return newArray.sort(compareAsc);
      } else if (this.selected == "Descending" && this.filterselect == "All") {
        return newArray.sort(compareDesc);
      } else if (this.selected == "Ascending") {
        newArray = [];
        for (let i = 0; i < this.partners.length; i++) {
          if (this.filterselect == "Community Clubs" && this.partners[i].category == "CC") {
            newArray.push(this.partners[i]);
          } else if (this.filterselect == "Sports Centres" && this.partners[i].category == "sports") {
            newArray.push(this.partners[i]);
          }
        }

        return newArray.sort(compareAsc);

      } else if (this.selected == "Descending") {
        newArray = [];
        for (let i = 0; i < this.partners.length; i++) {
          if (this.filterselect == "Community Clubs" && this.partners[i].category == "CC") {
            newArray.push(this.partners[i]);
          } else if (this.filterselect == "Sports Centres" && this.partners[i].category == "sports") {
            newArray.push(this.partners[i]);
          }
        }

        return newArray.sort(compareDesc);

      } else {
        return newArray.sort(compareAsc);
      }
    },
  },


  created() {
    this.fetchPlaces();
    fb.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    this.fetchItems(user);
  } else {
    // No user is signed in.
  }
});
    // this.userid = fb.auth().currentUser.uid;

  },

 mounted() {
  new WOW().init();
  },
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
  width: 80%;
}
</style>