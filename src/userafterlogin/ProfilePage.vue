<template>
    <div>
        <TopNavAftLogin></TopNavAftLogin>
        <b-row>
        <b-col>
        <UserStats class="wow fadeInLeft"></UserStats>
        </b-col>
        <b-col class="mt-4 mr-5" cols="5">
            <b-container class="mt-4 wow fadeInUp">
                <b-row align-h="center">
                <b-avatar :to="{ path: '/EditPhoto'}" :src= "profilepic" size="11em" id="avatar"></b-avatar>
                </b-row>
                
                <b-row align-h="center">
                <p class="text-center" style="font-weight:bold; color: #616161; font-size: 30px; margin-top: 10px;">{{username}}</p>
                </b-row>

                <b-row>
                    <b-col>
                        <b-row align-h="end" align-v="end" class="mt-2">
                <p style="color: #616161; font-size: 25px;"> {{userpoints}} points</p> 
                        </b-row>          
                    </b-col>

                    <b-col cols="5" class="ml-2">
                        <b-row>
                <img 
                src="../assets/pointsanimate.png"    
                />
                        </b-row>
                    </b-col>
                </b-row>

                <b-row align-h="center">
                <b-button
          id="button"
          class="btn btn-primary mx-auto d-block mb-3 mt-3"
          @click="$router.push('MerchantPage')"
          >Redeem Points</b-button
        >
                </b-row>

                <b-row>

        <b-button
          id="button"
          class="btn btn-primary mx-auto d-block mb-3"
          @click="$router.push('EditProfile')"
          >Edit Profile</b-button
        >  
                </b-row>
        </b-container>
        </b-col>
        </b-row>
        <div style = "padding-top: 100px"></div>
        <FooterAftLogin id="try" style = "position: fixed; bottom:0; width: 100%;"></FooterAftLogin>
    </div>
</template>

<script>
import TopNavAftLogin from './TopNavAftLogin.vue'
import UserStats from './UserStats.vue'
import FooterAftLogin from './FooterAftLogin.vue'
import fb from 'firebase'
import {WOW} from 'wowjs';

export default {
    components: {
        TopNavAftLogin,
        UserStats,
        FooterAftLogin,
    },
    data() {
        return {
            uid: "",
            profilepic: "",
            username: "",
            userpoints: "",
        }
    },
    methods: {
        getprofilepic() {
            fb.storage().ref('users/' + this.uid + '/profile.jpg').getDownloadURL().then(imgURL  => {
                this.profilepic = imgURL;
            })
        },
        getuserinfo() {
            fb.firestore().collection('users').doc(this.uid).get().then(snapshot => {
                this.username = snapshot.data().name;
                this.username = this.username.charAt(0).toUpperCase() + this.username.slice(1);
                this.userpoints = snapshot.data().points;
            })
        },
    },

    mounted() {
        new WOW().init();
    },

    created() {
        fb.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                this.uid = fb.auth().currentUser.uid;
                this.getprofilepic();
                this.getuserinfo();
            } else {
                // No user is signed in.
            }
        });

    }

}
</script>

<style scoped>
#button {
  background-color: #87ebd3!important;
  color: rgb(88, 87, 87)!important;
  border: none;
  transition-duration: 0.4s;
  width: 170px;
  text-transform: none;
}

#button:hover {
  background-color: rgb(212, 212, 212)!important;
  color:white!important;
}

#avatar {
  color:white!important;
  background-color:grey!important;
}


</style>

