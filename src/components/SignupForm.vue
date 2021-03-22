<template>
<form @signup.prevent="checkForm">
        <label>Display name:</label>
        <input type="name" required v-model="name">
        
        <label>Email:</label>
        <input type="email" required v-model="email">

        <label>Password:</label>
        <input type="password" required v-model="password">

        <label>Confirm password:</label>
        <input type="password" required v-model="confirmpassword">
        <div v-if="passwordError" class="error"></div>

        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>I agree with the terms and conditions</label>
        </div>

        <div class="signup">
            <button>Sign up</button>
        </div>
    </form>

     
</template>


<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
            terms: false,
            passwordError: ''
        }
    },
    
    methods: {
        checkForm: function() {
            //validate password
            if (this.password != this.confirmpassword) {
                this.passwordError = 'Passwords do not match.'
            }
    }
}
}
</script>

<style>
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
    width: 420px;
    height: 40px;
}
</style>