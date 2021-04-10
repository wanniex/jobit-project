<template>
    <div>
        <TopNavAftLogin/>
        
        <div class="justify-content-center">
            <b-container>
                <b-form @submit.prevent="updatePhoto">
                    <label>Profile Picture</label>
                    <input type = "file" @change = "chooseFile" />
                    <img style = "width: 300px; height: auto" src = "https://via.placeholder.com/150" class = "ui image centered" id = "img">

                    <br><br>

                    <b-button id="button" type="submit" onclick = "changePhoto()" class="btn btn-primary mx-auto d-block">Submit</b-button>

                </b-form>
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

        changePhoto(e) {
            imgfile =  e.target.files[0];
            const objectURL = URL.createObjectURL(imgfile)
            document.getElementById('img').src = objectURL;
            
            var user = fb.auth().currentUser;
            
            user.updateProfile({
            photoURL: objectURL,
            }).then(function() {
                // Update successful.
                }).catch(function(error) {
                    // An error happened.
                    });
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