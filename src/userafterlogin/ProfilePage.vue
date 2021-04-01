<template>
    <div>
        <TopNavAftLogin></TopNavAftLogin>
        <UserStats style = "float: left; width: 60%"></UserStats>
        <div class="justify-content-center">
            <b-container style = "margin-top: 100px;">
                <b-row align-h="center">
                <b-avatar href="#foo" src="https://placekitten.com/300/300" size="11em"></b-avatar>
                </b-row>
                
                <p class="text-center" style="font-weight:bold; color: #616161; font-size: 30px; margin-top: 10px;">Jessica</p>
                
                <p class="text-center" style="color: #616161; font-size: 25px;"> 2,400 points
                <img 
                src="../assets/points-image.png"
                style="float: center; margin-left: 5px;"        
                />
                </p>

                <br>

                <b-button id="button" type="submit" class="btn btn-primary mx-auto d-block">Redeem Points</b-button>

                <br>

                <b-button id="button" type="submit" class="btn btn-primary mx-auto d-block">Edit Profile</b-button>
                
                </b-container>
                </div>
        <Footer style = "clear: left;"></Footer>
    </div>
</template>

<script>
import TopNavAftLogin from './TopNavAftLogin.vue'
import UserStats from './UserStats.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        TopNavAftLogin,
        UserStats,
        Footer,
    },
    data() {
        return {

        }
    },
    methods: {

    }

}
</script>

<style scoped>
#button {
  background-color: #87ebd3;
  color: #ffff;
  border: none;
  transition-duration: 0.4s;
  width: 170px;
}

#button:hover {
  background-color: rgb(212, 212, 212);
  color: black;
}

</style>

