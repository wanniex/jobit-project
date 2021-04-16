<template>
    <div>
        <b-container style = "margin-top: 100px; margin-left: 20px;">
            <h1 style = "color: #616161"> You have donated: </h1>
            <img 
                src="../assets/green_shirt.png"
                style="height:80px; width: auto; margin-top: 20px; margin-left: 30px; float: left;"               
            /> 
            <div id = "nclothes" class = "des"> </div>
            <br>
            <h1 style = "color: #616161; margin-top: 50px; clear: left;"> You have saved: </h1>
            <img 
                src="../assets/green_water.png"
                style="height:80px; width: auto; margin-top: 20px; margin-left: 30px; float: left;"               
            />
            <div id = "water" class = "des"> </div>
            <br><br style= "clear: left">

            <img 
                src="../assets/green_leaf.png"
                style="height:80px; width: auto; margin-left: 30px; float: left;"               
            />
            <div id = "cotton" class = "des"> </div>
        </b-container>
    </div>

</template>

<script>
import fb from 'firebase'
export default {
    data() {
        return {
            uid: "",
        }
    },
    methods: {
        fetchStats() {
            // var user = fb.auth().currentUser;
            // var uid = user.uid;

            // var user = fb.auth().currentUser;
            // var uid = "Pmn78vDLq3ZCSZc4G0uudIxH06L2";
            var name, clothes_donated, water, cotton;
            if (this.uid) {
                fb.firestore().collection("users").doc(this.uid).get().then(doc => {
                    name = doc.data().name;
                    clothes_donated = doc.data().clothes_donated;
                    water = (clothes_donated * 2700 * 0.264172).toFixed(); // liter to gallons 
                    cotton = (clothes_donated * 0.138).toFixed(2);
                    document.getElementById("nclothes").innerHTML = clothes_donated + " articles of clothing(s)";
                    document.getElementById("water").innerHTML = water + " gallons of water";
                    document.getElementById("cotton").innerHTML = cotton + "kg of clothes and other textiles";
                });


            } else {
                alert("No users signed in"); // can change this part. For now using alert. 
            }
        }
    },
    created() {
        this.uid = fb.auth().currentUser.uid;
        this.fetchStats()
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');
.des {
    width: 554px;
    height: 100px;
    font-family: "Roboto Slab", serif;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    margin-top: 30px;
    margin-left: 50px;
    color: #616161;
    float: left;
}

</style>