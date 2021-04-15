<template>
    <div>
        <AdminAftLoginTopNav style = "margin-bottom: 100px;"></AdminAftLoginTopNav>
        <Goal style ="float: left; width: 50%;"></Goal>
        <DonatnCount style ="float: left; width: 50%; "></DonatnCount>
        <AdminFooter style = "clear: left; padding-top: 50px;"></AdminFooter>
    </div>
</template>

<script>
import AdminAftLoginTopNav from "./AdminAftLoginTopNav.vue";
import DonatnCount from './Charts/DonatnCount.vue'
import Goal from './Charts/Goal.vue'
import AdminFooter from "./AdminFooter.vue";

export default {
    components: {
        DonatnCount,
        AdminAftLoginTopNav,
        AdminFooter,
        Goal
    }
}
</script>

<style scoped>

</style>