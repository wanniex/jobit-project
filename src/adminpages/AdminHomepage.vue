<template>
    <div>
        <AdminAftLoginTopNav style = "margin-bottom: 100px;"></AdminAftLoginTopNav>
        <DonatnCount style ="float: left; width: 50%; padding: 20px; "></DonatnCount>
        <div style = "width: 45%; float: left; margin-top: -20px;">
            <h3> {{place}} stats for {{curmonth}}</h3>
            <br style = "padding-top: 20px;"/>
            <img 
                src="../assets/green_water.png"
                style="height:80px; width: auto; margin-top: 20px; margin-left: 30px; float: left;"               
            />
            <div class = "des"> {{curwater}} gallons of water </div>
            <br><br style= "clear: left">
            <img 
                src="../assets/green_leaf.png"
                style="height:80px; width: auto; margin-left: 30px; float: left;"               
            />
            <div class = "des"> {{curweight}} KG of clothes </div>
        </div>
        <div style = "clear:left; padding-top: 100px;"/>
        <Goal style ="float: left; width: 50%;"></Goal>
        
        
        <AdminFooter style = "clear: left; padding-top: 50px;"></AdminFooter>
    </div>
</template>

<script>
import AdminAftLoginTopNav from "./AdminAftLoginTopNav.vue";
import DonatnCount from './Charts/DonatnCount.vue'
import Goal from './Charts/Goal.vue'
import AdminFooter from "./AdminFooter.vue";
import fb from "firebase";

export default {
    data() {
        return {
            curwater: 0,
            curweight: 0,
            curamt: 0,
            uid: null,
            place: "",
            curmonth: "",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        }
    },
    components: {
        DonatnCount,
        AdminAftLoginTopNav,
        AdminFooter,
        Goal
    },
    methods: {
        getinfo() {
            var db = fb.firestore();
            var d, curmonthn;
            db.collection("partners").doc(this.uid).get().then(doc => {
                d = new Date();
                curmonthn = d.getMonth();
                this.curamt = doc.data().clothes_donated[curmonthn];
                this.curwater = (this.curamt * 2700 * 0.264172).toFixed();
                this.curweight = (this.curamt * 0.138).toFixed(2);
                this.place = doc.data().name;
                this.curmonth = this.months[curmonthn];
            })
        }
    },
    created() {
        this.uid = fb.auth().currentUser.uid;
        this.getinfo();
    }
}
</script>

<style scoped>
.des {
    height: 100px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    margin-top: 30px;
    margin-left: 50px;
    color: #616161;
    float: left;
}
</style>