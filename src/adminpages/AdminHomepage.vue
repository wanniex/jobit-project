<template>
    <div>
        <AdminAftLoginTopNav></AdminAftLoginTopNav>
        <div style = "padding-top:100px"/>
        <DonatnCount style ="float: left; width: 50%; padding: 20px; " class="wow fadeInLeft"></DonatnCount>
        <div style = "width: 45%; float: left; margin-top: -20px;" class="wow fadeInRight">
            <h1 style = "text-align: center; color: #505050; weight: bold;"> {{place}} stats for {{curmonth}}</h1>
            <br style = "padding-top: 20px;"/>
            <img 
                src="../assets/t-shirt-128.png"
                style="height:80px; width: auto; margin-top: 20px; margin-left: 30px; float: left;"               
            /> 
            <div class = "des"> {{curamt}} pieces of clothes </div>
            <br><br style= "clear: left">

            <img 
                src="../assets/admin-water-128.png"
                style="height:80px; width: auto; margin-top: 20px; margin-left: 30px; float: left;"               
            />
            <div class = "des"> {{curwater}} gallons of water </div>
            <br><br style= "clear: left">
            <img 
                src="../assets/admin-leaf-128.png"
                style="height:80px; width: auto; margin-left: 30px; float: left;"               
            />
            <div class = "des"> {{curweight}} KG of clothes </div>
        </div>
        <div style = "clear:left; padding-top: 100px;"/>
        <Goal style ="float: left; width: 50%;" class="wow fadeInUp"></Goal>
        <div style = "width: 45%; float: left; margin-top: 30px;" class="wow fadeInUp">
            <div class = "des2"> Current Amount: {{curamt}} </div>
            <div class = "des2"> Current Goal: {{curgoal}} </div>
            <div class = "des2" id = "statement">hello</div>
        </div>
       
       <div class="wow fadeInUp">
        <button id="open-button" @click="openForm()" style = "clear:left;  left: 50%; transform: translate(-50%, -50%);">Edit Goal</button>
       </div>
        <!-- Pop Up Form -->
        <div class="form-popup" id="setgoal" style = "margin-bottom: 50px">
          <form class="form-container" @submit.prevent="set_goal">
            <h3 style = "font-family: Helvetica, sans-serif; text-align: center; padding: 20px;">Set your new goal for this month</h3>

            <input id = "goal_input" type="number" placeholder="Enter Goal" name="goal" required>
            
            <button type="submit" class="btn">Submit</button>
            <button type="button" class="btn cancel" @click="closeForm()">Close</button>
          </form>
        </div>
        <div style = "clear:left; padding-top: 100px;"/>
        <AdminFooter style = "position:fixed; bottom:0; width: 100%; z-index:100;"></AdminFooter>
    </div>
</template>

<script>
import AdminAftLoginTopNav from "./AdminAftLoginTopNav.vue";
import DonatnCount from './Charts/DonatnCount.vue'
import Goal from './Charts/Goal.vue'
import AdminFooter from "./AdminFooter.vue";
import fb from "firebase";
import {WOW} from 'wowjs';

export default {
    data() {
        return {
            curwater: 0,
            curweight: 0,
            curamt: 0,
            curgoal: 0,
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
            db.collection("partners").doc(this.uid).onSnapshot(doc => {
                d = new Date();
                curmonthn = d.getMonth();
                this.curamt = doc.data().clothes_donated[curmonthn];
                this.curwater = (this.curamt * 2700 * 0.264172).toFixed();
                this.curweight = (this.curamt * 0.138).toFixed(2);
                this.place = doc.data().name;
                this.curmonth = this.months[curmonthn];
                this.curgoal = doc.data().donation_goal[curmonthn];
                
                var dif;
                if (this.curamt < this.curgoal) {
                    dif = this.curgoal - this.curamt;
                    document.getElementById("statement").innerHTML = "You are left with " + dif + " pieces of clothes to achieve " + this.curmonth + "'s goal!"
                } else {
                    dif = this.curamt - this.curgoal;
                    document.getElementById("statement").innerHTML = "Congrats! You have achieved " + this.curmonth + "'s goal!"
                }
            })
        },
        set_goal(e) {
            var db = fb.firestore();
            var uid = fb.auth().currentUser.uid;
            var d = new Date();
            var curmonth = d.getMonth();
            var curarr;
            var newgoal = document.getElementById("goal_input").value;
            if (newgoal <= 0) {
                alert("Your goal has to be greater than 0.")
                e.preventDefault();
                return false;
            }

            db.collection("partners").doc(uid).get().then(doc => {
                curarr = doc.data().donation_goal
                curarr[curmonth] = newgoal;
                db.collection("partners").doc(uid).update({
                "donation_goal": curarr
                })
            });
            this.closeForm();
        },
        openForm() {
            document.getElementById("setgoal").style.display = "block";
        },

        closeForm() {
            document.getElementById("setgoal").style.display = "none";
        },
        
    },

  mounted() {
    new WOW().init();
  },

    created() {
        fb.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                this.uid = fb.auth().currentUser.uid;
                this.getinfo();
            } else {
                // No user is signed in.
            }
        });

    },
}
</script>

<style scoped>

.form-popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* bring your own prefixes */
  /* border: 3px solid #f1f1f1; */
  z-index: 9;
}

#open-button {
  background-color: #555;
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  margin-top: 50px;
  margin-left: 50%;
  width: 200px;
  border-radius: 12px;

}


#open-button:hover {
  opacity: 1;
  background-color: #2d8bba;
  /* 2D8BBA */
}

.form-container .btn:hover {
    opacity: 1;
    background-color: #17df7b;
}



/* submit button */
.form-container .btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  width: 60%;
  opacity: 0.8;
  transform: translateX(30%);
  margin: 20px 0px 0px 0px; /*top right bot left */
}

/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: rgb(192, 35, 35);
}

.form-container .cancel:hover {
    opacity: 1;
    background-color: red;
}

.form-container {
  padding: 10px;
  background-color: white;
}

@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');
.des {
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

.des2 {
    height: 50px;
    font-family: "Roboto Slab", serif;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    margin-top: 30px;
    margin-left: 50px;
    color: #616161;
}
</style>