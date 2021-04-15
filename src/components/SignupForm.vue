<template>
<div>
    <div v-if="error" class="error">{{error.message}}</div>

    <form @submit.prevent="registerButtonPressed">
        <label>Display name:</label>
        <input type="name" required v-model="name" placeholder="Name">
        
        <label>Email:</label>
        <input type="email" required v-model="email" placeholder="Email">

        <label>Password:</label>
        <input v-on:blur = "validate" type="password" required v-model="password" placeholder="Password">

        <label>Confirm password:</label>
        <input v-on:blur = "validate" type="password" required v-model="confirmpassword" placeholder="Confirm Password">
        <br><br>
        <div v-show="passwordvalidate" id ="passwordvalidate"> Passwords do not match! </div>

        <label>Profile Picture</label>
        <input type = "file" @change = "chooseFile" required/>
        <img style = "width: 150px; height: auto;" src = "https://via.placeholder.com/150" class = "ui image centered" id = "img">
        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>I agree with the terms and conditions</label>
        </div>
        <br>
        <div class="signup">
            <button type="submit">Sign up</button>
        </div>
    
    </form>
</div>

</template>


<script>
import fb from 'firebase'

let imgfile = {}

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
            terms: false,
            error: '',
            passwordvalidate: false,
            imgext: '',
        }
    },
    
    methods: {
        chooseFile(e) {
            imgfile =  e.target.files[0];
            const objectURL = URL.createObjectURL(imgfile)
            document.getElementById('img').src = objectURL;
        },
        async registerButtonPressed() {
            fb
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {
                fb
                .storage()
                .ref('users/' + cred.user.uid + '/profile.jpg')
                .put(imgfile)
                .then(() => {
                    console.log('photo successfully uploaded');
                    fb
                    .firestore()
                    .collection('users')
                    .doc(cred.user.uid)
                    .set({
                        "name": this.name,
                        "clothes_donated": 0,
                        "points": 0,
                        "email": this.email,
                    }).then(() => {
                        fb
                        .auth()
                        .signOut()
                        .then(() => {
                            this.$router.push('/LogIn')
                        }).catch((error) => {alert(error);});
                    }).catch((error) => {alert(error);});
                }).catch((error) => {alert(error);});
            }).catch((error) => {alert(error);});
            // fb.auth().createUserWithEmailAndPassword(this.email, this.password).then(cred => {
            //     fb.storage().ref('users/' + cred.user.uid + '/profile.jpg').put(imgfile).then(() => {   
            //         console.log('photo successfully uploaded');
            //         fb.firestore().collection("users").doc(cred.user.uid).set({
            //             "name": this.name,
            //             "clothes_donated": 0,
            //             "points": 0,
            //             "auth": "normal"
            //         }).then(() => {
            //             this.$router.replace({name: 'HomePageAftLogin'});
            //         }).catch((error) => {alert(error);});
            //     }).catch((error) => {alert(error);});
            // }).catch((error) => {alert(error);});
        },


        validate() {
            if (this.password === this.confirmpassword) {
                this.passwordvalidate = false
            } else {
                this.passwordvalidate = true
            }
        }

    },
    watch: {

    }
}
</script>

<style>
#passwordvalidate {
    color: red;

}

form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: black;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 15px;
    letter-spacing: 1px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
}

input {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #E8E8E8;
    border-bottom: 1px solid #ddd;
    color: black;
    box-sizing: border-box;
    border-radius: 5px;
}

input[type="checkbox"] {
    display: inline-block;
    position: relative;
    top: 2px;
    margin: 0 10px 0 0;
    width: 16px;
}

button {
    background: #87EBD3;
    color: white;
    font-size: 15px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    border-radius: 5px;
    width: 100%;
    height: 40px;
}

.error {
    color: red;
    font-size: 18px;
}
</style>