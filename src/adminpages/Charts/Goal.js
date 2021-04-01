import { Doughnut } from 'vue-chartjs'
import fb from '../../firebase.js'

export default {
    extends: Doughnut,
    data: function() {
        return {
            datacollection: {
                labels:["Donated", "Remaining"],
                datasets: [{
                    data:[],
                    backgroundColor: ["#2D8BBA","grey"],
                    // hoverBorderColor: ["black", "red"]
                    borderWidth:0,
                }]
            },
            options: {
                legend: {
                  display: false
                },
                title: {
                    display: true,
                    text: 'Goal',
                    fontSize: 30,
                },
                // trying this to add text into doughnut chart, but not working
                // elements: {
                //     center: {
                //         text: "Hello",
                //         color: "#2D8BBA"
                //     }
                // },
                responsive: true,
                maintainAspectRatio: true
            },
        }
    },
    // mounted() {
    //     var db = fb.firestore();
    //     // var curuser = fb.auth().currentUser;
    //     //uid = curuser.uid; 
    //     var uid = "KRqkR8RDsluWJMENfe4U";//*********** change this later
    //     var curcount, perc, goal,d ,curmonth;
    //     db.collection('partners').doc(uid).get().then(doc => {
    //         d = new Date();
    //         curmonth = d.getMonth();   
    //         curcount = doc.data().clothes_donated[curmonth];
    //         goal = doc.data().donation_goal[curmonth];
    //         perc = ((curcount/goal)/goal).toFixed(2);
            
    //         if (curcount >= goal) {
    //             curcount = goal;
    //         }
    //         goal = goal - curcount;
    //         this.datacollection.datasets[0].data.push(curcount);
    //         this.datacollection.datasets[0].data.push(goal);
    //         console.log(this.datacollection.datasets[0].data)
    //         console.log(this.datacollection.labels)
    //     });
    //     this.renderChart(this.datacollection, this.options);
    // }
    methods: {
        fetchItems() {
            var db = fb.firestore();
            // var curuser = fb.auth().currentUser;
            //uid = curuser.uid; 
            var uid = "KRqkR8RDsluWJMENfe4U";//*********** change this later
            var curcount, perc, goal,d ,curmonth;
            db.collection('partners').doc(uid).get().then(doc => {
                d = new Date();
                curmonth = d.getMonth();   
                curcount = doc.data().clothes_donated[curmonth];
                goal = doc.data().donation_goal[curmonth];
                perc = ((curcount/goal)/goal).toFixed(2);
                
                if (curcount >= goal) {
                    curcount = goal;
                }
                goal = goal - curcount;
                this.datacollection.datasets[0].data.push(curcount);
                this.datacollection.datasets[0].data.push(goal);
            }).then(() => {
                this.renderChart(this.datacollection, this.options);
            })
        }
    },
    created() {
        this.fetchItems();
        
    }
}