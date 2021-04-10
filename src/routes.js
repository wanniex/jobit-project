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

export default[

    // For User Pages
    {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
            guest: true
        }
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp,
        meta: {
            guest: true
        }
    },
    {
        path: '/LogIn',
        name: 'LogIn',
        component: Login,
        meta: {
            guest: true
        }
    },
    {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs,
        meta: {
            guest: true
        }
    },
    {
        path: '/ForgotPassword',
        name: 'ForgotPassword',
        component: ForgotPassword,
        meta: {
            guest: true
        }
    },
    {
        path: '/PasswordResetLink',
        name: 'PasswordResetLink',
        component: PasswordResetLink,
        meta: {
            guest: true
        }
    },
    {
        path: '/NewPasswordPage',
        name: 'NewPasswordPage',
        component: NewPasswordPage,
        meta: {
            guest: true
        }
    },
    {
        path: '/HomePageAftLogin',
        name: 'HomePageAftLogin',
        component: HomePageAftLogin,
        meta: {
            auth: true
        }
    },
    {
        path: '/MerchantPage',
        name: 'MerchantPage',
        component: MerchantPage,
        meta: {
            auth: true
        }
        
    },
    {
        path: '/RedeemPoints',
        name: 'RedeemPoints',
        component: RedeemPoints,
        meta: {
            auth: true
        }
    },
    {
        path: '/EditProfile',
        name: 'EditProfile',
        component: EditProfile,
        meta: {
            auth: true
        }
    },
    {
        path: '/UserStats',
        name: 'UserStats',
        component: UserStats,
        meta: {
            auth: true
        }
    },
    {
        path: '/EditProfileInputs',
        name: 'EditProfileInputs',
        component: EditProfileInputs,
        meta: {
            auth: true
        }
    },
    {
        path: '/EditPassword',
        name: 'EditPassword',
        component: EditPassword,
        meta: {
            auth: true
        }
    },
    {
        path: '/EditPhoto',
        name: 'EditPhoto',
        component: EditPhoto,
        meta: {
            auth: true
        }
    },
    {
        path: '/ProfilePage',
        name: 'ProfilePage',
        component: ProfilePage,
        meta: {
            auth: true
        }
    },
    {
        path: '/EditUsername',
        name: 'EditUsername',
        component: EditUsername,
        meta: {
            auth: true
        }
    },

    //For Admin Pages
    {
        path: '/AdminLogin',
        name: 'AdminLogin',
        component: AdminLogin,
        meta: {
            auth: true
        }
    },
    {
        path: '/AdminSubmitPage',
        name: 'AdminSubmitPage',
        component: AdminSubmitPage,
        meta: {
            auth: true
        }
    },
    {
        path: '/AdminConfirmPage',
        name: 'AdminConfirmPage',
        component: AdminConfirmPage,
        meta: {
            auth: true
        }
    },
    {
        path: '/AdminHomepage',
        name: 'AdminHomepage',
        component: AdminHomepage,
        meta: {
            auth: true
        }
    },
    {
        path: '/Chart',
        name: 'Chart',
        component: Chart,
        meta: {
            auth: true
        }
    },
    
]