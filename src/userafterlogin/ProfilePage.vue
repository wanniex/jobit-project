<template>
    <div>
        <TopNavAftLogin></TopNavAftLogin>
        <UserStats style = "float: left; width: 60%"></UserStats>
        <div class="justify-content-center">
            <b-container style = "margin-top: 100px;">
                <b-row align-h="center">
                <b-avatar :to="{ path: '/EditPhoto'}" :src= "profilepic" size="11em"></b-avatar>
                </b-row>
                
                <p class="text-center" style="font-weight:bold; color: #616161; font-size: 30px; margin-top: 10px;">{{username}}</p>
                
                <p class="text-center" style="color: #616161; font-size: 25px;"> {{userpoints}} points
                <img 
                src="../assets/pointsanimate.png"
                style="float: center; margin-left: 5px;"        
                />
                </p>

                <br>

                <router-link to = "/MerchantPage"><b-button id="button" class="btn btn-primary mx-auto d-block">Redeem Points</b-button></router-link>

                <br>
                <router-link to = "/EditProfile"><b-button id="button" class="btn btn-primary mx-auto d-block">Edit Profile</b-button></router-link>
                
                </b-container>
                </div>
        <Footer style = "clear: left;"></Footer>
    </div>
</template>

<script>
import TopNavAftLogin from './TopNavAftLogin.vue'
import UserStats from './UserStats.vue'
import Footer from '../components/Footer.vue'
import fb from 'firebase'

export default {
    components: {
        TopNavAftLogin,
        UserStats,
        Footer,
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
    created() {
        this.uid = fb.auth().currentUser.uid;
        this.getprofilepic();
        this.getuserinfo();
    }

}
</script>

<style scoped>
#button {
  background-color: #87ebd3;
  color: #ffff;
  border: none;
  transition-duration: 0.4s;
  width: 170px;
}

#button:hover {
  background-color: rgb(212, 212, 212);
  color: black;
}

</style>

