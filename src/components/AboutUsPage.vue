<template>
  <div>
      <TopNav></TopNav>

          <div class="vl"></div>

    <div class="split left">
      <div class="centered">
        <h1 id="aboutusheading">About Us</h1>
        <p id="aboutus">Clonate aims to encourage the donation of clothing for the needy, reduce textile waste and empower communities. Join us in our cause today.</p>
        <img id="plant" src="../assets/soil.png"/>
      </div>
    </div>


    
    <div class="split right">
        <div class="centered">  
            <h1 id="contactusheading">Contact Us</h1>
            <p id="email">Email: contact@clonate.com<br>Number: +65 6516 6666</p>
            <p id="address">Address:<br>21 Lower Kent Ridge Road,<br>Singapore 119077</p>
            <img id="map" src="../assets/clonatemap.png"/>
      </div>
    </div>

    <br>
    <foot id = "footer"></foot>
      
  </div>
</template>


<script>
import Footer from './Footer'
import TopNav from './TopNav.vue';

export default {
  components: {
    'foot': Footer,
    TopNav,
  },
}
</script>


<style scoped>
#footer {
    position: relation;
    margin-top: 740px;
}

/* Split the screen in half */
.split {
  height: 110%;
  width: 50%;
  position: fixed;
  top: 0;
}

#aboutusheading, #contactusheading {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  color: #616161;

}

#aboutus, #email, #address {
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
color: #616161;
text-align: top;
}

.vl {
  border-left: 6px solid #C4C4C4;
  margin-left: -3px;

  position: sticky;
  width: 7px;
  height: 555px;
  left: 50%;
  top: 1px;
}

  /* Control the left side */
.left {
  left: 0;
  margin-top: 10px;
}

/* Control the right side */
.right {
  right: 0;
  margin-top: 10px;
}

/* content centered horizontally and vertically */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Style the image inside the centered container, if needed */
img {
    float: left;
    position: center;
    width: 350px;
    height: 200px;
}
</style>
