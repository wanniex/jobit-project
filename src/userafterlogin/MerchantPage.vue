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
        <!-- <b-dropdown id="dropdown-1" text="Sort by" class="m-md-2" v-on:change="fetchItems">
          <b-dropdown-item id="asc" value="asc">Ascending Order</b-dropdown-item>
          <b-dropdown-item id="desc" value="desc">Descending Order</b-dropdown-item>

          <b-dropdown-item v-for="option in options" 
          :key="option.value"
          :value="option.value"
          @click="this.selected = option.value">
          {{option.text}}
          </b-dropdown-item>

        </b-dropdown> -->
        <b-text class="mr-2">Sort by:</b-text>
        <b-form-select v-model="selected" :options="options" id="formformat"
          >Sort by</b-form-select
        >
      </b-row>

      <b-row class="mt-5 mb-5"></b-row>

      <b-row class="mt-5 align-items-stretch">
        <b-col v-for="ele in sortedArray" :key="ele.name">
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

              <b-button href="#" id="button" class="mt-auto">Select</b-button>
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
import fb from "../firebase";

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
          this.merchants.push(item);
        });
      });
    },
  },

  computed: {
    sortedArray: function () {
      console.log("new");
      var newArray = this.merchants;
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
    this.fetchItems();
  },
};
</script>


<style scoped>
#button {
  background-color: #87ebd3;
  color: #ffff;
  border: none;
  transition-duration: 0.4s;
  width: 200px;
  align-self: center;
}

#button:hover {
  background-color: rgb(212, 212, 212);
  color: black;
}

#formformat {
  width: 10%;
}
</style>