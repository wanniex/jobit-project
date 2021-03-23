<template>
  <div>
    <TopNav></TopNav>
    
    <img id="clothes1" src="../assets/Clothes2.png"/>
    <div id = "rightcontent">
        <div id = "text1">Welcome Back!</div>
      <div id = "text2">Login to your account</div>
      <Login id = "Login"></Login>
    </div>
    <br>
    <foot id = "footer"></foot>

  </div>
</template>

<script>
import Login from './Login.vue';
import Footer from './Footer'
import TopNav from './TopNav.vue';

export default {
  components: {
    Login,
    'foot': Footer,
    TopNav
  },
}
</script>


<style scoped>
img {
    float: left;
    position: relative;
    width: 700px;
    height: auto;
}

#footer {
    position: relation;
    margin-top: 740px;
}

#rightcontent {
  float: right;
  margin-top: 30px;
}

#text1{
    position: absolute;
    width: 105px;
    height: 19px;
    margin-top: 100px;
    margin-left: 40px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
}

#text2{
  /* position: absolute; */
  width: 432px;
  height: 45px;
  top: 171px;
  margin-left:40px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  margin-top: 120px;
}

#Login {
    margin-top: -50px;
}
</style>
