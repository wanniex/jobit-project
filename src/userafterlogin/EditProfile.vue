<template>
    <div>
        <TopNavAftLogin></TopNavAftLogin>
        <UserStats style = "float: left; width: 60%"></UserStats>
        <EditProfileInputs style = "float: left; width: 40%"></EditProfileInputs>

        <Footer style = "clear: left;"></Footer>
    </div>

</template>

<script>
import TopNavAftLogin from './TopNavAftLogin.vue'
import UserStats from './UserStats.vue'
import Footer from '../components/Footer.vue'
import EditProfileInputs from './EditProfileInputs.vue'

export default {
    components: {
        TopNavAftLogin,
        UserStats,
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