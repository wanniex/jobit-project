<template>
    <div>
        <AdminAftLoginTopNav style = "margin-bottom: 100px;"></AdminAftLoginTopNav>
        <Goal style ="float: left; width: 50%;"></Goal>
        <DonatnCount style ="float: left; width: 50%; "></DonatnCount>
        <Footer style = "clear: left; padding-top: 50px;"></Footer>
    </div>
</template>

<script>
import AdminAftLoginTopNav from "./AdminAftLoginTopNav.vue";
import DonatnCount from './Charts/DonatnCount.vue'
import Goal from './Charts/Goal.vue'
import Footer from "../components/Footer.vue";

export default {
    components: {
        DonatnCount,
        AdminAftLoginTopNav,
        Footer,
        Goal
    }
}
</script>

<style scoped>

</style>