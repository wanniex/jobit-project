<template>
    <div>
        <AdminAftLoginTopNav></AdminAftLoginTopNav>

        <div class="justify-content-center">
    <b-container>
      <b-row align-h="center" class="mt-5 mb-5">
        <h1>Your Admin Profile</h1>
      </b-row>

      <b-row class="mb-4">

        <b-col cols="5" class="mb-3">
          <b-card-group deck class="h-100">
            <b-card
              v-bind:img-src="this.imageURL"
              body-class="d-flex flex-column"
              img-alt="Card image"
              img-top
              img-height="300"
              img-width="200"
            >

              <b-card-text style = "color: black;" class="text-center">

                Address: <br>{{this.address}}<br><br>

                Opening Hours: <br>{{this.openinghrs}}
              </b-card-text>
            </b-card>
         
          </b-card-group>
        </b-col>
          
          
    <b-col>    
      <b-row align-h="center" class="mt-3 mb-3">
        <b-avatar
          v-bind:src="profilepic"
          id="profilepic"
          size="8em"
          class="mt-3 mb-3"
        ></b-avatar>
      </b-row>


      <b-row align-h="center" class="mb-3">
          <b-card>
            <b-card-text style = "color: black;" class="text-center">
                <h4>{{this.username}}</h4><br>
                <p>Email: {{this.email}}</p>
              </b-card-text><br>


              <b-card-text style = "color: black;" class="text-center">
                  <p>Experiencing any problems? Contact the Clonate team!</p><br>
              <b-button id="button" onclick="location.href='mailto:tsoqbt3103@gmail.com';">Contact Clonate</b-button>
              </b-card-text>
          </b-card>
      </b-row>

      
      <b-row align-h="center" class="mb-3">

            
      </b-row>
          </b-col>
      </b-row>

    </b-container>
  </div>
        
        
        <AdminFooter></AdminFooter>
    </div>
</template>

<script>
import AdminAftLoginTopNav from "./AdminAftLoginTopNav.vue";
import AdminFooter from "./AdminFooter.vue";
import fb from "firebase";

export default {
    data() {
        return {
            username: "",
            email: "",
            profilepic: "",
            address: "",
            openinghrs: "",
            imageURL: "",
        }
    },
    components: {
        AdminAftLoginTopNav,
        AdminFooter,
    },

    methods: {
        getprofilepic() {
            fb.storage().ref('users/' + this.uid + '/profile.jpg').getDownloadURL().then(imgURL  => {
                this.profilepic = imgURL;
            })
        },
        getuserinfo() {
            fb.firestore().collection('partners').doc(this.uid).get().then(snapshot => {
                this.username = snapshot.data().name;
                this.address = snapshot.data().address;
                this.openinghrs = snapshot.data().openinghrs;
                this.imageURL = snapshot.data().imageURL;
            })
        },
    },
    created() {
        this.uid = fb.auth().currentUser.uid;
        this.email = fb.auth().currentUser.email;
        this.getprofilepic();
        this.getuserinfo();
    }
}
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
</style>