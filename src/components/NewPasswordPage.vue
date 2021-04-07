<template>
    <div>
        <TopNav></TopNav>
        <b-container style = "width: 700px; padding: 50px; height: 500px;">
            <h1 style="text-align: center"> Enter your new password</h1>
            <b-form fluid @submit.prevent="handlereset()">
                <b-form-group
                    id="input-group-1"
                    label="New Password:"
                    label-for="password1"
                    class="mt-2"
                >
                    <b-form-input
                        id="password1"
                        type="password"
                        placeholder="New Password"
                        v-model="password1"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label="Confirm Password:"
                    label-for="password2"
                    class="mt-2"
                >
                    <b-form-input
                        id="password2"
                        type="password"
                        placeholder="Confirm Password"
                        v-model="password2"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-button type = "submit" id="button" pill class="mt-4 ml-5 mb-5">Reset Password</b-button><br />
            </b-form>

        </b-container>
        <Footer></Footer>
    </div>
</template>

<script>
import TopNav from "./TopNav.vue";
import Footer from './Footer.vue';

export default {
    components: {
        TopNav,
        Footer
    },
    data() {
        return {
            password1: "",
            password2: ""
        }
    },
    methods: {
        handlereset() {
            
            if (this.password1 == this.password2) {
                if (this.password1.length < 8) {
                    alert("Password length must be at least 8 characters!");
                    return false;
                }
                else if (this.password1.length > 15) {
                    alert("Password length cannot be more than 15 characters!");
                    return false;
                } else {
                    alert("Password has been successfully changed!");
                    this.$router.push('/');             // create the login page and push here;
                    return true;
                }
            } 
            else {
                alert("Passwords do not match!")
                return false;
            }
        }
    }
}
</script>

<style scoped>
#button {
  background-color: #87ebd3;
  color: black;
  border: none;
  transition-duration: 0.4s;
  width: 200px;
}

#button:hover {
  background-color: rgb(212, 212, 212);
  color: black;
}
</style>