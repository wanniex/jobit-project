<template>
    <div>
        <TopNavAftLogin/>
        <div class="justify-content-center animated fadeInUp">
            
            <b-container>

                <b-row align-h="center" class="mt-5">
                    <h2>Change your password</h2>
                </b-row> 
                
                <b-form @submit.prevent="changePassword">
                    <b-row align-h="center">
                    <b-avatar v-bind:src = "profilepic" size="8em" id="profilepic"></b-avatar>
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
                    v-on:blur = "validate"
                    ></b-form-input>
                    </b-form-group>
                    
                   <b-form-group label="Confirm New Password:" label-for="cfm_new_pw">
                    <b-form-input
                    id="cfm_new_pw"
                    v-model= "cfm_new_pw"
                    type="password"
                    placeholder= "Confirm New Password"
                    v-on:blur = "validate"
                    ></b-form-input>
                    </b-form-group>
                    <div v-show="passwordvalidate" id ="passwordvalidate"> New Passwords do not match! </div>
                    
                    <br>
                    <b-button id="button" type="submit" class="btn btn-primary mx-auto d-block">Submit</b-button>
                </b-form>

            </b-container>
        </div>
        <FooterAftLogin/>
    </div>

</template>

<script>
import TopNavAftLogin from './TopNavAftLogin.vue'
import fb from 'firebase'
import FooterAftLogin from './FooterAftLogin.vue'


export default {
    components: {
        TopNavAftLogin,
        FooterAftLogin
    },
    data() {
        return {
            user: "",
            profilepic: "",
            username: "",
            old_pw: "",
            new_pw:"",
            cfm_new_pw: "",
            passwordvalidate: false,

        }
    },
    methods: {
        // Reauthenticates the current user 
        reauthenticate(password) {
            var cred = fb.auth.EmailAuthProvider.credential(this.user.email, password);
            return this.user.reauthenticateWithCredential(cred);
        },
        getprofilepic() {
            fb.storage().ref('users/' + this.user.uid + '/profile.jpg').getDownloadURL().then(imgURL  => {
                this.profilepic = imgURL;
            })
            
        },

        // Changes user's password...
        changePassword() {
            this.reauthenticate(this.old_pw).then(() => {
                this.user.updatePassword(this.new_pw).then(() => {
                    alert("Password updated!");
                    this.$router.replace({name: 'EditProfile'});
                    }).catch((error) => { alert(error.message); });
                    }).catch((error) => { alert(error.message) });
        },

        validate() {
            if (this.new_pw === this.cfm_new_pw) {
                this.passwordvalidate = false
            } else {
                this.passwordvalidate = true
            }
        }
    },
        
    created() {
        this.user = fb.auth().currentUser;
        this.getprofilepic();
    }
}
</script>

<style scoped>
#button {
  background-color: #87ebd3!important;
  color: #4d4b4b!important;
  border: none;
  transition-duration: 0.4s;
  text-transform: none;
  width:200px;
}

#button:hover {
  background-color: rgb(212, 212, 212)!important;
  color: rgb(255, 255, 255)!important;
}

#profilepic {
  color:white!important;
  background-color:grey!important;
}
</style>