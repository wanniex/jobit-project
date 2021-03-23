<template>
    <div id="app">
        <!-- <div>
            <router-link to=/ exact>Login</router-link>  
            <router-link to=/register exact> Register</router-link>
            <router-link to=/home exact>Home</router-link>
        </div> -->
        <!-- <h3>Login</h3> -->
        <form @submit.prevent="pressed">
            <div class="login">
                <div id = "des"> Email </div>
                <input type="text" placeholder="Email" v-model="email" />
            </div>
            <div class="password">
                <div id = "des"> Password </div>
                <input type="password" placeholder="Password" v-model="password" />
            </div>
            <button>Login</button>
            <a id = "forgetpw">I forgot my password</a>
            <p id = "text2">
                <span>Dont have an account?</span> 
                <span id = "text3"> Join free today!</span>
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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

button {
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