<template>
    <div class="chart">
        
        <Goal style = "width: 60%; margin-left: auto; margin-right: auto;"></Goal>
        
        <button class="open-button" @click="openForm()">Edit Goal</button>

        <div class="form-popup" id="setgoal">
          <form class="form-container" @submit.prevent="set_goal">
            <h3 style = "font-family: Helvetica, sans-serif; text-align: center; padding: 20px;">Set your new goal for this month</h3>

            <input id = "goal_input" type="number" placeholder="Enter Goal" name="goal" required>

            <button type="submit" class="btn">Submit</button>
            <button type="button" class="btn cancel" @click="closeForm()">Close</button>
          </form>
        </div>
    </div>
    
</template>

<script>
import Goal from "./Goal.js";
import fb from 'firebase'

export default {
  data() {
    return {
    }
  },
  components: {
    Goal

  },
  methods: {
    openForm() {
      document.getElementById("setgoal").style.display = "block";
    },

    closeForm() {
      document.getElementById("setgoal").style.display = "none";
    },
    set_goal() {
      var db = fb.firestore();
      // var curuser = fb.auth().currentUser;
      //uid = curuser.uid; 
      var uid = "HAXIeBjEPnzGcTdL8Mbk";//*********** change this later
      var d = new Date();
      var curmonth = d.getMonth();
      var curarr;
      var newgoal = document.getElementById("goal_input").value;
      db.collection("partners").doc(uid).get().then(doc => {
        curarr = doc.data().donation_goal
        curarr[curmonth] = newgoal;
        db.collection("partners").doc(uid).update({
          "donation_goal": curarr
        }).then(() => {
          location.reload(true);
        });
      })
             
    }
  }
}
</script>

<style>

.form-popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* bring your own prefixes */
  /* border: 3px solid #f1f1f1; */
  z-index: 9;
}

.open-button {
  background-color: #555;
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  margin-top: 50px;
  margin-left: 34%;
  width: 200px;
  border-radius: 12px;

}


.form-container .btn:hover, .open-button:hover {
  opacity: 1;
  background-color: #2D8BBA;
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
  background-color: red;
}

.form-container {
  padding: 10px;
  background-color: white;
}
</style>
