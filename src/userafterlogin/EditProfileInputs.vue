<template>
    <div class="justify-content-center">
        <b-container>
            <b-form @submit="onSubmit" @reset="onReset">
                <b-row align-h="center">
                <b-avatar v-bind:src = "'require('+profilepic+')'" id = "profilepic" class="mr-5" size="8em"></b-avatar>
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

                <b-form-group id="email" label="Your Email:" label-for="email">
                    <b-form-input
                    id="email_input"
                    v-model= "new_email"
                    placeholder= "Enter email"
                    ></b-form-input>
                </b-form-group>

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
                <b-button id="button" type="submit" class="btn btn-primary mx-auto d-block">Submit</b-button>
            </b-form>

        </b-container>
    </div>

</template>

<script>
import fb from 'firebase'

export default {
    data() {
        return {
            uid: '',
            // profilepic: 'https://firebasestorage.googleapis.com/v0/b/jobit-38c72.appspot.com/o/users%2F2vobHEO0uYZSwvfdT2JiFWfwC3x1%2Fprofile.jpg?alt=media&token=aa678c37-b275-40d5-ac56-57ef85f9188b',
            profilepic: '',
        }
    },
    methods: {
        getprofilepic() {
            alert("getting profile pic")
            fb.storage().ref('users/' + this.uid + '/profile.jpg').getDownloadURL().then(imgURL  => {
            // document.getElementById('profilepic').src = imgURL;
            this.profilepic = imgURL;
            // alert(this.profilepic);
            // alert(this.profilepic);
            });
        },

        getuuid(){
            return new Promise((resolve, reject) => {
            var user = fb.auth().currentUser;
            if(user == null) reject()
            if (user) {
                resolve(user.uid)
                alert("got user");
            }
            })
        }
    },
    created() {
        this.uid = fb.auth().currentUser.uid;
        this.getprofilepic();
        // this.getuuid().then(uid=> (this.uid = uid)
        //     .then(() => this.getprofilepic())
        // )
    },

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