<template>
    <div>
        <TopNavAftLogin/>
        
        <div class="justify-content-center">
            <b-container>
                <form @submit.prevent="updatePhoto">
                    <label>Profile Picture</label>
                    <input type = "file" @change = "chooseFile" />
                    <img style = "width: 300px; height: auto" src = "https://via.placeholder.com/150" class = "ui image centered" id = "img">

                    <br><br>

                    <b-button id="button" type="submit" class="btn btn-primary mx-auto d-block">Submit</b-button>

                </form>
         </b-container>
       </div>

        <Footer/>
    </div>

</template>

<script>
import TopNavAftLogin from './TopNavAftLogin.vue'
import fb from 'firebase'
import Footer from '../components/Footer.vue'
let imgfile = {}
export default {
    components: {
        TopNavAftLogin,
        Footer
    },
    data() {
        return {
            username: "",
            uid: null,
            profile_pic: "",
        }
    },
    methods: {
        chooseFile(e) {
            imgfile =  e.target.files[0];
            const objectURL = URL.createObjectURL(imgfile)
            document.getElementById('img').src = objectURL;
        },
        updatePhoto(e) {
            var user = fb.auth().currentUser;
            fb.storage().ref('users/' + user.uid + '/profile.jpg').delete().then(() => {
                fb.storage().ref('users/' + user.uid + '/profile.jpg').put(imgfile).then(() => {
                    alert("Profile photo has been updated!");
                    this.$router.replace({name: 'EditProfile'});
                })
            })
        }
    }
}
</script>

<style scoped>
#button {
  background-color: #87ebd3;
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