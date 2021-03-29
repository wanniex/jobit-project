<template>
    <div>
        <form @submit.prevent="pressed">
            <label>Email:</label>
            <input type="email" required v-model="email" placeholder="Email">
            
            <label>Password:</label>
            <input type="password" required v-model="password" placeholder="Password">

            <!-- <router-link to= "" tag = "button" id = "loginbtn">Login</router-link> -->
            <div class="signup">
                <button type="submit">Login</button>
            </div>
            
            <router-link id = "forgetpw" to=/ForgotPassword exact>I forgot my password</router-link>
            <p id = "text2">
                <span>Don't have an account? </span>
                <span id = "text3">
                    <router-link id="text3" to=/SignUp exact>Join free today!</router-link>
                </span>             
            </p>
        </form>
    </div>
</template>

<script>
import fb from '../firebase'

export default {
    components: {
    },
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async pressed() {
            fb.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(data => {
                    console.log(data);
                    this.$router.replace({name: 'Home'}); //changing the name here would redirect the user to the name of the page
                }).catch(error => {
                    this.error = error;
                });
        }
    }
}
</script>

<style scoped>

.error {
    color: red;
    font-size: 18px;
}

input {
    width: 400px;
    height: 50px;
    padding: 30px;
    /* margin: 20px; */
    font-size: 21px;
}

#loginbtn {
    position: absolute;
    width: 400px;
    height: 47.43px;
    font-size: 100%;
    /* margin-left: 0px; */
    margin-top: 40px;
}

#des {
    margin-top: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
}

#forgetpw {
    position: absolute;
    width: 151px;
    height: 19px;
    left: 950px;
    top: 630px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #616161;
}

#text2 {
    position: absolute;
    width: 279px;
    height: 19px;
    left: 900px;
    top: 650px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
}

#text3 {
    color:rgb(14, 156, 137)
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
</style>