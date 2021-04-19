import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from 'firebase';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(VueRouter)

// Integrating Google Maps into app
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDtr6cQZ-bMR-dibwF9m6eE3oS9Gc9S3b4',
    libraries: 'places',
  },
})


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDtr6cQZ-bMR-dibwF9m6eE3oS9Gc9S3b4",
  authDomain: "jobit-38c72.firebaseapp.com",
  projectId: "jobit-38c72",
  storageBucket: "jobit-38c72.appspot.com",
  messagingSenderId: "407951507326",
  appId: "1:407951507326:web:18f29a4c16508568d07d2f",
  measurementId: "G-W1SZ08LYHH"
};

firebase.initializeApp(firebaseConfig);


// wowjs
import {WOW} from 'wowjs';
import 'animate.css';


const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: myRouter,
}).$mount('#app')