<template>
  <div>
    <TopNavAftLogin></TopNavAftLogin>

    <b-container fluid class="mt-5 mb-5">
      <b-row align-h="center">
        <h1>Redeem your points</h1>
      </b-row>

      <b-row align-h="center" class="mt-4">
        <h4 style="color: gray">Choose your merchant:</h4>
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
        <b-col v-for="ele in sortedArray" :key="ele.name" cols="3">
          <b-card-group deck class="h-100 mb-3">
            <b-card
              v-bind:header="ele[1].name"
              body-class="d-flex flex-column"
              class="mb-5"
              fluid
              align="center"
            >
              <!-- <b-card-text class="text-center">
                Fairprice
              </b-card-text> -->

              <b-img v-bind:src="ele[1].imageURL" fluid class="mb-4"></b-img>

              <b-button v-bind:id="ele[0]" v-on:click="route($event)" class="mt-auto btn">Select</b-button>
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
import fb from "firebase";

export default {
  components: {
    Footer,
    TopNavAftLogin,
  },

  data() {
    return {
      merchants: [],
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
    };
  },

  methods: {
    fetchItems: function () {
      var merchantsRef = fb.firestore().collection("merchants");
      merchantsRef.get().then((snapshot) => {
        let item = {};
        snapshot.docs.forEach((doc) => {
          // console.log(doc.data())
          item = doc.data();
          this.merchants.push([doc.id, item]);
        });
      });
    },

    route: function (event) {
      this.$router.push({
        name: "RedeemPoints",
        params: { id: event.target.getAttribute("id") },
      });
      // console.log(event.target.getAttribute("id"))
    },
  },

  computed: {
    sortedArray: function () {
      var newArray = this.merchants;
      function compareAsc(a, b) {
        if (a[1].name < b[1].name) return -1;
        if (a[1].name > b[1].name) return 1;
        return 0;
      }

      function compareDesc(a, b) {
        if (a[1].name > b[1].name) return -1;
        if (a[1].name < b[1].name) return 1;
        return 0;
      }
      // console.log(newArray);
      if (this.selected == "Ascending") {
        return newArray.sort(compareAsc);
      } else {
        return newArray.sort(compareDesc);
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
  background-color: #87ebd3;
  color: #ffff;
  border: none;
  transition-duration: 0.4s;
}

.btn:hover {
  background-color: rgb(212, 212, 212);
  color: black;
}

#formformat {
  width: 10%;
}
</style>