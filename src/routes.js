// For User Pages
import Login from './components/LoginPage.vue'
import Home from './components/HomePage.vue'
import SignUp from './components/SignUpPage.vue'
import AboutUs from './components/AboutUsPage.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import PasswordResetLink from './components/PasswordResetLink.vue'
import NewPasswordPage from './components/NewPasswordPage.vue'
import HomePageAftLogin from './userafterlogin/HomePageAftLogin.vue'
import MerchantPage from './userafterlogin/MerchantPage.vue'
import RedeemPoints from './userafterlogin/RedeemPoints.vue'
import EditProfile from './userafterlogin/EditProfile.vue'
import UserStats from './userafterlogin/UserStats.vue'
import EditProfileInputs from './userafterlogin/EditProfileInputs.vue'

// For Admin Pages
import AdminLogin from './adminpages/AdminLogin.vue'
import AdminSubmitPage from './adminpages/AdminSubmitPage.vue'
import AdminConfirmPage from './adminpages/AdminConfirmPage.vue'

export default[

    // For User Pages
    {
        path: '',
        name: 'Home',
        component: Home
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
    {
        path: '/ForgotPassword',
        name: 'ForgotPassword',
        component: ForgotPassword
    },
    {
        path: '/PasswordResetLink',
        name: 'PasswordResetLink',
        component: PasswordResetLink
    },
    {
        path: '/NewPasswordPage',
        name: 'NewPasswordPage',
        component: NewPasswordPage
    },
    {
        path: '/HomePageAftLogin',
        name: 'HomePageAftLogin',
        component: HomePageAftLogin
    },
    {
        path: '/MerchantPage',
        name: 'MerchantPage',
        component: MerchantPage
    },
    {
        path: '/RedeemPoints',
        name: 'RedeemPoints',
        component: RedeemPoints
    },
    {
        path: '/EditProfile',
        name: 'EditProfile',
        component: EditProfile
    },
    {
        path: '/UserStats',
        name: 'UserStats',
        component: UserStats
    },
    {
        path: '/EditProfileInputs',
        name: 'EditProfileInputs',
        component: EditProfileInputs
    },


    // For Admin Pages
    {
        path: '/AdminLogin',
        name: 'AdminLogin',
        component: AdminLogin
    },
    {
        path: '/AdminSubmitPage',
        name: 'AdminSubmitPage',
        component: AdminSubmitPage
    },
    {
        path: '/AdminConfirmPage',
        name: 'AdminConfirmPage',
        component: AdminConfirmPage
    },
]