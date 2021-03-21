import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Home from './components/HomePage.vue'

export default[
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
]