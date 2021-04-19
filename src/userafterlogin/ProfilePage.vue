<template>
    <div>
        <TopNavAftLogin></TopNavAftLogin>
        <UserStats style = "float: left; width: 60%" class="wow fadeInLeft"></UserStats>
        <div class="justify-content-center wow fadeInUp">
            <b-container style = "margin-top: 100px;">
                <b-row align-h="center">
                <b-avatar :to="{ path: '/EditPhoto'}" :src= "profilepic" size="11em" id="avatar"></b-avatar>
                </b-row>
                
                <p class="text-center" style="font-weight:bold; color: #616161; font-size: 30px; margin-top: 10px;">{{username}}</p>
                
                <p class="text-center" style="color: #616161; font-size: 25px;"> {{userpoints}} points
                <img 
                src="../assets/pointsanimate.png"
                style="float: center; margin-left: 5px;"        
                />
                </p>

               

                <b-button
          id="button"
          class="btn btn-primary mx-auto d-block mb-3 mt-5"
          @click="$router.push('MerchantPage')"
          >Redeem Points</b-button
        >

        <b-button
          id="button"
          class="btn btn-primary mx-auto d-block mb-3"
          @click="$router.push('EditProfile')"
          >Edit Profile</b-button
        >  
                </b-container>
                </div>
        <FooterAftLogin style = "clear: left; position: fixed; bottom:0; width: 100%; z-index:100;"></FooterAftLogin>
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

