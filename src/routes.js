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
import AboutUsAftLogin from './userafterlogin/AboutUsAftLogin'
import Howitworks from './components/Howitworks.vue'

import UserStats from './userafterlogin/UserStats.vue'
import EditProfileInputs from './userafterlogin/EditProfileInputs.vue'
import ProfilePage from './userafterlogin/ProfilePage.vue'
import EditUsername from './userafterlogin/EditUsername.vue'
import EditPassword from './userafterlogin/EditPassword.vue'
import EditPhoto from './userafterlogin/EditPhoto.vue'

// For Admin Pages
import AdminLogin from './adminpages/AdminLogin.vue'
import AdminSubmitPage from './adminpages/AdminSubmitPage.vue'
import AdminConfirmPage from './adminpages/AdminConfirmPage.vue'
import AdminHomepage from './adminpages/AdminHomepage.vue'
import Chart from './adminpages/Charts/Goal.vue'
import AdminProfilePage from './adminpages/AdminProfilePage.vue'

export default[

    // For User Pages
    {
        path: '',
        name: 'Home',
        component: Home,
        // meta: {
        //     guest: true
        // }
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp,
        // meta: {
        //     guest: true
        // }
    },
    {
        path: '/LogIn',
        name: 'LogIn',
        component: Login,
        // meta: {
        //     guest: true
        // }
    },
    {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs,
        // meta: {
        //     guest: true
        // }
    },
    {
        path: '/ForgotPassword',
        name: 'ForgotPassword',
        component: ForgotPassword,
        // meta: {
        //     guest: true
        // }
    },
    {
        path: '/PasswordResetLink',
        name: 'PasswordResetLink',
        component: PasswordResetLink,
        // meta: {
        //     guest: true
        // }
    },
    {
        path: '/NewPasswordPage',
        name: 'NewPasswordPage',
        component: NewPasswordPage,
        // meta: {
        //     guest: true
        // }
    },
    {
        path: '/HomePageAftLogin',
        name: 'HomePageAftLogin',
        component: HomePageAftLogin,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/MerchantPage',
        name: 'MerchantPage',
        component: MerchantPage,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/RedeemPoints',
        name: 'RedeemPoints',
        component: RedeemPoints,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/EditProfile',
        name: 'EditProfile',
        component: EditProfile,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/UserStats',
        name: 'UserStats',
        component: UserStats,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/EditProfileInputs',
        name: 'EditProfileInputs',
        component: EditProfileInputs,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/EditPassword',
        name: 'EditPassword',
        component: EditPassword,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/EditPhoto',
        name: 'EditPhoto',
        component: EditPhoto,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/ProfilePage',
        name: 'ProfilePage',
        component: ProfilePage,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/EditUsername',
        name: 'EditUsername',
        component: EditUsername,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/AboutUsAftLogin',
        name: 'AboutUsAftLogin',
        component: AboutUsAftLogin,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/Howitworks',
        name: 'Howitworks',
        component: Howitworks,
    },

    //For Admin Pages
    {
        path: '/AdminLogin',
        name: 'AdminLogin',
        component: AdminLogin,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/AdminSubmitPage',
        name: 'AdminSubmitPage',
        component: AdminSubmitPage,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/AdminConfirmPage',
        name: 'AdminConfirmPage',
        component: AdminConfirmPage,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/AdminHomepage',
        name: 'AdminHomepage',
        component: AdminHomepage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/Chart',
        name: 'Chart',
        component: Chart,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/AdminProfilePage',
        name: 'AdminProfilePage',
        component: AdminProfilePage,
        // meta: {
        //     requiresAuth: true
        // }
    },
    
]