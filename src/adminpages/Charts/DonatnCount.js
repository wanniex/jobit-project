// import { BreadcrumbPlugin } from 'bootstrap-vue';
import { Bar } from 'vue-chartjs'
import fb from 'firebase'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            labels: [],
            datasets: [{
                backgroundColor: "#2D8BBA",
                // ["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850","#ffdb58"],
                data: []
              }]
        },
        options: {
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
            },
            legend: { display: false },
            title: {
              display: true,
              text: 'Number of Donations',
              fontSize: 30
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        var db = fb.firestore();
        var uid = fb.auth().currentUser.uid;
        var clothesarr, curmonth, d, ds, start;
        db.collection('partners').doc(uid).get().then(doc => {
            clothesarr = doc.data().clothes_donated;
            d = new Date();
            curmonth = d.getMonth();    //print number Jan = 0, Feb = 1 ...
            
            if (curmonth - 5 < 0) {
                start = 0;
            } else {
                start = curmonth - 5;
            }
            for (var i = start; i <= curmonth; i ++) {
                ds = this.datacollection.datasets[0];
                if (i < 0 || i > 11) {  // might need to change this to cater to december, show last 5 months
                    break;
                } else {
                    ds.data.push(clothesarr[i]);
                    this.datacollection.labels.push(this.datacollection.months[i]);

                }
            }
            
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}

