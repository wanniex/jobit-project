import Register from './components/Register.vue'
import Login from './components/LoginPage.vue'
import Home from './components/HomePage.vue'
import SignUp from './components/SignUpPage.vue'
import AboutUs from './components/AboutUsPage.vue'

export default[
    {
        path: '',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/LogIn',
        name: 'LogIn',
        component: Login
    },
    {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs
    },
]