<template>
    <div>
        <TopNavAftLogin></TopNavAftLogin>

        <EditProfileInputs style = "padding-bottom: 50px;"></EditProfileInputs>
        
        <FooterAftLogin style = "position: fixed; bottom:0; width: 100%;"></FooterAftLogin>
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