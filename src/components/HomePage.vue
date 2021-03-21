<template>
  <div>
    <top-nav></top-nav>
    <section>
      <img id="headerpic" :src="imageURL" />
      <h1 id="fact">166,600 tonnes of textile waste are generated in Singapore annually.</h1>
    <div id="pgcontent">
      <img id="clothesrack" :src="clothesimg" />
      <img :src="womanimg" />
      <p id="aboutus">Clonate aims to encourage the donation of clothing for the needy, reduce textile waste and empower communities. <br>Join us in our cause today.</p>
      <signup-btn id="pgbtn"></signup-btn>
    </div>
    </section>
    <foot></foot>
  </div>
</template>



<script>
import Footer from './Footer'
import TopNav from './TopNav.vue';
import SignupBtn from './SignupBtn.vue';

export default {
  components: {
    'foot': Footer,
    TopNav,
    SignupBtn
  },
  data() {
    return {
      imageURL: "https://i.imgur.com/kLbiwtb.png",
      clothesimg: "https://i.imgur.com/03sVNdK.png",
      womanimg: "https://i.imgur.com/dr8DLP8.png",
    };
  },
};
</script>


<style scoped>
section:after {
  content: '';
  display: table;
  clear: both;
}

#headerpic {
width: 100%;
height: 248px;
/* left: -1px;
top: 85px;
margin: auto; */
}

#fact {
position: absolute;
width: 1031px;
height: 171px;
left: 800px;
top: 124px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 50px;
line-height: 75px;

color: #FFFFFF;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

#pgcontent {
  margin-left: 100px;
  margin-top: 100px;
  margin-bottom: 100px; 
}

#clothesrack {
width: 471px;
height: 500px;
left: 400px;
top: 370px;
}

#aboutus {

position: absolute;
width: 900px;
height: 1000px;
left: 1100px;
top: 512px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 50px;
line-height: 50px;
text-align: center;

color: #616161;
}

#pgbtn {
  position: absolute;
  width: 83px;
  height: 10px;
  left: -100px;
  top: 800px;
}

</style>