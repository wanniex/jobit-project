<template>
  <div>
    <TopNav></TopNav>
    
    <img id="clothes1" src="../assets/Clothes1.png"/>
    <div id = "rightcontent">
      <div id = "text1"> Sign up for a free account now!</div>
      <SignupForm class = "SignUpForm" style = "margin-top: -60px;"></SignupForm>
    </div>
    <foot style = "clear: both"></foot>

  </div>
</template>

<script>
import SignupForm from './SignupForm.vue';
import Footer from './Footer'
import TopNav from './TopNav.vue';

export default {
  components: {
    SignupForm,
    'foot': Footer,
    TopNav
  },
}
</script>


<style scoped>
.clothes1 {
  float: left;
}


#rightcontent {
  float: right;
  margin-right: 60px;
  margin-top: -50px;
}

#text1{
  /* position: absolute; */
  width: 432px;
  height: 45px;
  left: 852px;
  top: 171px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  margin-top: 100px;
  margin-left: 20px;
}
</style>
