<template>
    <div>
        <TopNavAftLogin></TopNavAftLogin>

        <EditProfileInputs></EditProfileInputs>

        <Footer style = "clear: left;"></Footer>
    </div>

</template>

<script>
import TopNavAftLogin from './TopNavAftLogin.vue'
import Footer from '../components/Footer.vue'
import EditProfileInputs from './EditProfileInputs.vue'

export default {
    components: {
        TopNavAftLogin,
        Footer,
        EditProfileInputs
    },
    data() {
        return {

        }
    },
    methods: {

    }

}
</script>

<style scoped>

</style>