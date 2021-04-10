<template>
    <div class="justify-content-center">
        <b-container>
            <b-form>

                <b-row align-h="center">
                <b-avatar v-bind:src = "profilepic" id = "profilepic" class="mr-5" size="8em"></b-avatar>
                </b-row>

                <br>

                <b-row align-h="center">
                    <h1>{{username}}</h1>
                    </b-row>

                <br>
                <router-link to ="/EditUsername" tag = "button"> Change Username </router-link>
                
                <br><br>
                <router-link to ="/EditPhoto" tag = "button"> Change Profile Picture </router-link>
                
                <br><br>
                <router-link to ="/EditPassword" tag = "button"> Change Password </router-link>

    
            </b-form>

        </b-container>
    </div>

</template>

<script>
import fb from 'firebase'

export default {
    data() {
        return {
            uid: null,
            profilepic: "hello",
            username:"",
        }
    },
    methods: {
        getprofilepic() {
        fb.storage().ref('users/' + this.uid + '/profile.jpg').getDownloadURL().then(imgURL  => {
            this.profilepic = imgURL;
        })
        },
    },
    created() {
        this.uid = fb.auth().currentUser.uid;
        this.getprofilepic();
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