<template>
  <div>
    <TopNavAftLogin></TopNavAftLogin>

    <b-container fluid class="mt-5 mb-5">
      <b-row align-h="center">
        <h1 class="animated fadeInUp">Redeem your points</h1>
      </b-row>

      <b-row align-h="center" class="mt-4">
        <h4 style="color: gray" class="animated fadeInUp">Choose your merchant:</h4>
      </b-row>

      <b-row align-h="center" class="mt-5 mb-5 animated fadeInUp">
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
        <b-col v-for="ele in sortedArray" :key="ele.name" cols="3">
          <b-card-group deck class="h-100 mb-3">
            <b-card
              v-bind:header="ele.name"
              body-class="d-flex flex-column"
              class="mb-5"
              fluid
              align="center"
            >
              <!-- <b-card-text class="text-center">
                Fairprice
              </b-card-text> -->

              <b-img v-bind:src="ele.imageURL" fluid class="mb-4"></b-img>

              <b-button v-bind:id="ele.docid" v-on:click="route($event)" class="mt-auto btn">Select</b-button>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>

    <FooterAftLogin style = "position: fixed; bottom:0; width: 100%;"></FooterAftLogin>
  </div>
</template>

<script>
import TopNavAftLogin from "./TopNavAftLogin.vue";
import FooterAftLogin from './FooterAftLogin.vue';
import fb from "firebase";

export default {
  components: {
    FooterAftLogin,
    TopNavAftLogin,
  },

  data() {
    return {
      merchants: [],
      merchantitems: [],
      selected: "Ascending",
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
        value: "Food & Beverage",
        text: "Food & Beverage"
      },
      {
        value: "Supermarket",
        text: "Supermarket"
      },
      {
        value: "Fashion",
        text: "Fashion"
      }
    ],
    filterselect: "All"
    };
  },

  methods: {
    fetchItems: function () {
      var merchantsRef = fb.firestore().collection("merchants");
      merchantsRef.get().then((snapshot) => {
        let item = {};
        snapshot.docs.forEach((doc) => {
          item = {
            name: doc.data().name,
            imageURL: doc.data().imageURL,
            category: doc.data().category,
            link: doc.data().link,
            docid: doc.id
          }
          this.merchantitems.push(item);
        });
      });
    },

    route: function (event) {
      this.$router.push({
        name: "RedeemPoints",
        query: { id: event.target.getAttribute("id") },
      });
    },
  },

  computed: {
    sortedArray: function () {
      var newArray = this.merchantitems;
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
        for (let i = 0; i < this.merchantitems.length; i++) {
          if (this.filterselect == "Food & Beverage" && this.merchantitems[i].category == "foodbev") {
            newArray.push(this.merchantitems[i]);
          } else if (this.filterselect == "Supermarket" && this.merchantitems[i].category == "supermarket") {
            newArray.push(this.merchantitems[i]);
          } else if (this.filterselect == "Fashion" && this.merchantitems[i].category == "fashion") {
            newArray.push(this.merchantitems[i]);
          }
        }

        return newArray.sort(compareAsc);

      } else if (this.selected == "Descending") {
        newArray = [];
          for (let i = 0; i < this.merchantitems.length; i++) {
          if (this.filterselect == "Food & Beverage" && this.merchantitems[i].category == "foodbev") {
            newArray.push(this.merchantitems[i]);
          } else if (this.filterselect == "Supermarket" && this.merchantitems[i].category == "supermarket") {
            newArray.push(this.merchantitems[i]);
          } else if (this.filterselect == "Fashion" && this.merchantitems[i].category == "fashion") {
            newArray.push(this.merchantitems[i]);
          }
        }

        return newArray.sort(compareDesc);

      } else {
        return newArray.sort(compareAsc);
      }
    },
  },

  created() {
    this.fetchItems();
  },
};
</script>


<style scoped>
.btn {
  background-color: #87ebd3!important;
  color: #ffffff!important;
  border: none;
  transition-duration: 0.4s;
  text-transform: none;
}

.btn:hover {
  background-color: rgb(212, 212, 212)!important;
  color: rgb(0, 0, 0)!important;
}

#formformat {
  width: 80%;
}
</style>