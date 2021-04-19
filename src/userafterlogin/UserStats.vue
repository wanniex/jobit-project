<template>
    <div>
        <b-container class="mt-5 ml-5">

        <b-row>
        <h2 style="color:#545454">You have donated:</h2>
        </b-row>

            <b-row class="mt-4" align-h="center" align-v="center">
                <b-col>
                    <b-row align-h="center">
            <img 
                src="../assets/green_shirt.png"  
                style="width:80px"             
            /> 
                    </b-row>
                </b-col>
                <b-col cols="10">
                    <b-row align-h="start" class="ml-2">
            <h2 class="des">{{this.nclothes}} articles of clothings</h2>
                    </b-row>
                </b-col>

            </b-row>


                <b-row class="mt-4">
                    <h2 style="color:#545454">You have saved:</h2>
                </b-row>

            <b-row class="mt-4" align-h="start" align-v="center">
                <b-col>
                    <b-row align-h="center">
<img 
                src="../assets/green_water.png"   
                style="width:80px"   
            />
                    </b-row>
                </b-col>
                <b-col cols="10">
                     <b-row align-h="start" class="ml-2">
            <h2 class="des">{{this.water}} gallons of water </h2>
                     </b-row>
                </b-col>
                </b-row>
            
            <b-row class="mt-4" align-h="start" align-v="center">
                <b-col>
                    <b-row align-h="center">
            <img 
                src="../assets/green_leaf.png"   
                style="width:80px"        
            />
                    </b-row>
                </b-col>
                <b-col cols="10">
                     <b-row align-h="start" class="ml-2">
                <h2 class="des">{{this.cotton}} kg of clothes and other textiles</h2>
                     </b-row>
                </b-col>
            </b-row>

        </b-container>


    </div>

</template>

<script>
import fb from 'firebase'
export default {
    data() {
        return {
            uid: "",
            nclothes: null,
            water: null,
            cotton: null
        }
    },
    methods: {
        fetchStats(user) {
            // var user = fb.auth().currentUser;
            // var uid = user.uid;

            // var user = fb.auth().currentUser;
            // var uid = "Pmn78vDLq3ZCSZc4G0uudIxH06L2";
            // var name, clothes_donated, water, cotton;

                this.uid = user.uid;
                fb.firestore().collection("users").doc(this.uid).get().then(doc => {
                    // name = doc.data().name;
  
                    this.nclothes = doc.data().clothes_donated;
                    this.water = (this.nclothes * 2700 * 0.264172).toFixed(); // liter to gallons 
                    this.cotton = (this.nclothes * 0.138).toFixed(2);
                    // document.getElementById("nclothes").innerHTML = clothes_donated + " articles of clothing(s)";
                    // document.getElementById("water").innerHTML = water + " gallons of water";
                    // document.getElementById("cotton").innerHTML = cotton + "kg of clothes and other textiles";


                });
            
        },
    },
    created() {
        fb.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                // this.uid = fb.auth().currentUser.uid;
                this.fetchStats(user);
            } else {
                // No user is signed in.
            }
        });

    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');
.des {

    font-family: "Roboto Slab", serif;
    font-style: normal;
    font-weight: 500;
    font-size: 30px!important;

    color: #616161;

}

</style>