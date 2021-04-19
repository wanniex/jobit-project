<template>
  <div>
    <TopNav></TopNav>
    <b-row>
      <b-col>
        <b-img fluid src="https://firebasestorage.googleapis.com/v0/b/jobit-38c72.appspot.com/o/clonateimages%2Fclothing-donation-image-2.jpg?alt=media&token=833d17a7-cbb7-493a-97fc-8390565c22e7" alt="Image 1" id="image" class="animated fadeInLeft"></b-img>
      </b-col>

      <b-col>
        <b-row align-h="center" class="animated fadeInRight">
          
      <SignupForm></SignupForm>
        </b-row>
      </b-col>
    </b-row>
    <Footer style = "position: fixed; bottom:0; width: 100%;"></Footer>

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
