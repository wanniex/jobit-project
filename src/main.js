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

const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: myRouter,
}).$mount('#app')

// myRouter.beforeEach((to, from, next) => {
//   var auth = firebase.auth()
//   auth.onAuthStateChanged(userAuth => {
//     if (userAuth) {
//       auth.currentUser.getIdTokenResult()
//         .then(({claims}) => {
//           if (claims.admin) {
//             if (to.path !== '/AdminHomePage')
//               return next({
//                 path: '/AdminHomePage'
//               });
//           }
//           if (claims.customer) {
//             if (to.path !== '/HomePageAftLogin')
//               return next({
//                 path: '/HomePageAftLogin'
//               });
//           }
//         })
//       }
//       const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//       const isAuthenticated = auth.currentUser;
//       if (requiresAuth && !isAuthenticated) {
//         next('/LogIn');
//       } else {
//         next();
//       }
//     })
//     next();
//   });
        // .then(function ({
        //   claims
        // }) 
        // {
        //
        //   if (claims.customer) {
        //     if (to.path !== '/HomePageAftLogin')
        //       return next({
        //         path: '/HomePageAftLogin',
        //       })
        //   } else if (claims.admin) {
        //     if (to.path !== '/AdminHomePage')
        //       return next({
        //         path: '/AdminHomePage',
        //       })
        //   } 
        // })
//     } else {
//       if (to.matched.some(record => record.meta.auth)) {
//         next({
//           path: '/LogIn',
//           query: {
//             redirect: to.fullPath
//           }
//         })
//       } else {
//         next()
//       }
//     }

//   })

//   next()

// })