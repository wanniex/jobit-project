<template>
    <div>
        <TopNavAftLogin></TopNavAftLogin>

        <EditProfileInputs></EditProfileInputs>

        <FooterAftLogin></FooterAftLogin>
    </div>

</template>

<script>
import TopNavAftLogin from './TopNavAftLogin.vue'
import FooterAftLogin from './FooterAftLogin.vue'
import EditProfileInputs from './EditProfileInputs.vue'

export default {
    components: {
        TopNavAftLogin,
        FooterAftLogin,
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