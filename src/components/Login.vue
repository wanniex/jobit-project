<template>
    <div>
        <form @submit.prevent="pressed">
            <div class="login">
                <div id = "des"> Email </div>
                <input type="text" placeholder="Email" v-model="email" />
            </div>
            <div class="password">
                <div id = "des"> Password </div>
                <input type="password" placeholder="Password" v-model="password" />
            </div>
            <router-link to= "" tag = "button" id = "loginbtn">Login</router-link>
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
import auth from '../firebase'

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
            auth.signInWithEmailAndPassword(this.email, this.password)
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
</style>