<template>
    <div>
        <TopNavAftLogin/>
        <div class="justify-content-center">
            
            <b-container>
                
                <b-form @submit.prevent="updatepassword">
                    <b-row align-h="center">
                    <b-avatar v-bind:src = "profilepic" class="mr-5" size="8em"></b-avatar>
                    </b-row>
                    <br>
                    
                    <b-form-group id="old_pw" label="Old Password:" label-for="old_pw">
                    <b-form-input
                    id="old_pw"
                    v-model= "old_pw"
                    type="password"
                    placeholder= "Enter Old Password"
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group id="new_pw" label="New Password:" label-for="new_pw">
                    <b-form-input
                    id="new_pw"
                    v-model= "new_pw"
                    type="password"
                    placeholder= "Enter New Password"
                    ></b-form-input>
                    </b-form-group>

                    <br>
                    <b-button id="button" type="submit" onclick = "changePassword()" class="btn btn-primary mx-auto d-block">Submit</b-button>
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


export default {
    components: {
        TopNavAftLogin,
        Footer
    },
    data() {
        return {
            uid: null,
            profilepic: "",
            username: "",
            password: "",
            newPassword:"",
             

        }
    },
    methods: {
        // Reauthenticates the current user 
        reauthenticate(password) {
            var user = fb.auth().currentUser;
            var cred = fb.auth.EmailAuthProvider.credential(user.email, password);
            return user.reauthenticateWithCredential(cred);
            },

        // Changes user's password...
        changePassword() {
            this.reauthenticate(this.state.password).then(() => {
                var user = fb.auth().currentUser;
                user.updatePassword(this.state.newPassword).then(() => {
                    console.log("Password updated!");
                    }).catch((error) => { console.log(error.message); });
                    }).catch((error) => { console.log(error.message) });
                    },
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