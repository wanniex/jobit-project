<template>
    <div id="app">
        <div>
            <router-link to=/ exact>Login</router-link>  
            <router-link to=/register exact> Register</router-link>
            <router-link to=/home exact>Home</router-link>
        </div>
        <h3>Login</h3>
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="text" placeholder="login" v-model="email" />
            </div>
            <div class="password">
                <input type="password" placeholder="password" v-model="password" />
            </div>
            <button>Login</button>
        </form>
    </div>
</template>

<script>
import auth from '../firebase'

export default {
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
    padding: 30px;
    margin: 20px;
    font-size: 21px;
}

button {
    width: 400px; 
    height: 75px;
    font-size: 100%;
}
</style>