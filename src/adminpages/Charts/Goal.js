import { Doughnut } from 'vue-chartjs'
// import Chart from "chart.js";
import fb from 'firebase'

var perctotal;

export default {
    extends: Doughnut,
    data: function() {
        return {
            datacollection: {
                labels:["Donated", "Remaining"],
                datasets: [{
                    data:[],
                    backgroundColor: ["#2D8BBA","grey"],
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
                animation: {
                    animateScale: true,
                },
                cutoutPercentage: 65,
                responsive: true,
                maintainAspectRatio: true
            },
        }
    },
    methods: {
        fetchItems() {
            var db = fb.firestore();
            var uid = fb.auth().currentUser.uid;
            var curcount, goal,d ,curmonth;
            db.collection('partners').doc(uid).get().then(doc => {
                d = new Date();
                curmonth = d.getMonth();   
                curcount = doc.data().clothes_donated[curmonth];
                goal = doc.data().donation_goal[curmonth];
                perctotal = ((curcount/goal)*100).toFixed(0);
                if (curcount >= goal) {
                    curcount = goal;
                }
                goal = goal - curcount;
                this.datacollection.datasets[0].data.push(curcount);
                this.datacollection.datasets[0].data.push(goal);
            }).then(() => {
                this.renderChart(this.datacollection, this.options);
            })
        },
        
    },
    created() {
        this.addPlugin({
            id: 'my-plugin',
            beforeDraw: plugin
        })
        this.fetchItems();
    },
}

var plugin = function(chart) {
    var width = chart.chart.width;
    var height = chart.chart.height;
    var ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = perctotal + "%";
    var textX = Math.round((width - ctx.measureText(text).width) / 2);
    var textY = height / 2 + 30;

     ctx.fillText(text, textX, textY);
     ctx.save();
}