<template>
    <div>
        <TopNav></TopNav>
        <b-container style = "width: 700px; padding: 50px; height: 500px;" class="animated fadeInUp">
            <h1 style="text-align: center"> A link to reset your password has been sent to your email</h1>
                <router-link to="/NewPasswordPage">
                <img src="../assets/email.png" class="img-fluid" style = "width: 300px; height: auto; display: block; margin-left: auto; margin-right: auto; margin-top:30px;"/>
                </router-link>
        </b-container>
        <Footer style = "position: fixed; bottom:0; width: 100%;"></Footer>
    </div>
</template>

<script>
import TopNav from "./TopNav.vue";
import Footer from './Footer.vue';

export default {
    components: {
        TopNav,
        Footer
    }
}
</script>

<style scoped>

</style>