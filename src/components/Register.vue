<template>
    <div id="app">
        <router-link to=/ exact>Login</router-link>  
        <router-link to=/register exact> Register</router-link>
        <router-link to=/home exact>Home</router-link>  
        <div>
            <div v-if="error" class="error">{{error.message}}</div>
            <form @submit.prevent="pressed">
                <h3>Register</h3>
                <div class="email">
                    <input type="email" v-model="email" placeholder="email">
                </div>
                <div class="password">
                    <input type="password" v-model="password" placeholder="password">
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<script>
// import * as firebase from 'firebase/app'
import auth from '../firebase'

export default {
    methods: {
        async pressed() {
            try {
                const user = auth.createUserWithEmailAndPassword(this.email, this.password)
                console.log(user)
                this.$router.replace({name: 'Home'});
            } catch(err) {
                console.log(err)
            }
        }
    },
    data() {
        return {
            email: '',
            password: '',
            error: ''
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