<template>
    <div>
        <TopNavAftLogin/>
        <div class="justify-content-center">
            
            <b-container>

                <b-row align-h="center">
                <b-form @submit.prevent="updateusername">
                <b-row align-h="center" class="mb-5">
                    <h2>Change your username</h2>
                </b-row> 
                    <b-row align-h="center">
                    <b-avatar v-bind:src = "profilepic" size="8em" id="profilepic"></b-avatar>
                    </b-row>

                    <b-row align-h="center" class="mt-2">
                    <div> Current Username: {{username}} </div>
                    </b-row>
                    <b-form-group
                        id = "name"
                        label = "Display Name:"
                        label-for = "name"
                    >
                        <b-form-input
                        id = "name_input"
                        v-model = "new_name"
                        placeholder ="Enter new Username"
                        required
                        ></b-form-input>
                    </b-form-group>
                    <br>
                    <b-button id="button" type="submit" class="btn btn-primary mx-auto d-block">Submit</b-button>
                </b-form>
                </b-row>

            </b-container>
        </div>
        <FooterAftLogin/>
    </div>
</template>

<script>
import fb from 'firebase'
import TopNavAftLogin from './TopNavAftLogin.vue'
import FooterAftLogin from './FooterAftLogin.vue'

export default {
    components: {
        TopNavAftLogin,
        FooterAftLogin,
    },
    data() {
        return {
            uid: null,
            profilepic: "hello",
            username: "",
        }
    },
    methods: {
        getprofilepic() {
            fb.storage().ref('users/' + this.uid + '/profile.jpg').getDownloadURL().then(imgURL  => {
                this.profilepic = imgURL;
            })
        },
        getusername() {
            fb.firestore().collection('users').doc(this.uid).get().then(snapshot => {
                this.username = snapshot.data().name;
                this.username = this.username.charAt(0).toUpperCase() + this.username.slice(1);
            })
        },
        updateusername() {
            fb.firestore().collection("users").doc(this.uid).update({
                "name": document.getElementById("name_input").value
            }).then(() => {
                alert('updated!')
                this.$router.push('EditProfile')
            });
        },
    

    },
    created() {
        this.uid = fb.auth().currentUser.uid;
        this.getprofilepic();
        this.getusername();
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