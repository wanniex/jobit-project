<template>
  <div>
    <TopNav></TopNav>
    <b-row>
      <b-col>
        <b-img fluid src="https://i.imgur.com/2L8Yz2I.jpg" alt="Image 1" id="image"></b-img>
      </b-col>

      <b-col>
        <b-row align-h="center">
          
      <SignupForm></SignupForm>
        </b-row>
      </b-col>
    </b-row>
    <Footer></Footer>

  </div>
</template>

<script>
import SignupForm from './SignupForm.vue';
import TopNav from './TopNav.vue';
import Footer from './Footer.vue';

export default {
  components: {
    SignupForm,
    TopNav,
    Footer
  },
}
</script>


<style scoped>
#image {
  width:100%;
  height: 100%;
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
