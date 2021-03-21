<template>
  <div>
    <top-nav></top-nav>
    <section>
    <img id="pic" :src="imageURL" />
    <div id="content">
      <h1 id="aboutus">About Us</h1>
      <p id="audescription">
        JobIt provides you with a safe platform to seek or provide ad-hoc
        services!
      </p>
      <h1 id="contactus">Contact Us</h1>
      <p id="cudescription">
        Email: helpdesk@JobIt.com<br /><br />
        Address: National University of Singapore, <br />
        1 Lower Kent Ridge Road<br />
        Singapore 119077<br /><br />

        Contact Number: +65 6676 8888
      </p>
    </div>
    </section>
    <foot></foot>
  </div>
</template>



<script>
import Footer from './Footer'
import TopNav from './TopNav.vue';

export default {
  components: {
    'foot': Footer,
    TopNav
  },
  data() {
    return {
      imageURL: "https://i.imgur.com/yrhowMy.jpg",
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

#itemsList {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}

#pic {
  /* position: absolute; */
  float: left;
  width: 39%;
  height: 810px;
  left: -5px;
  top: 92px;
}

#content {
  /* position: absolute; */
  float: left;
  width: 61%;
  height: 603px;
  left: 578px;
  top: 177px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

#aboutus {
  font-family: Mplus 1p;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 80px;
  text-align: center;
  color: #368ea1;
}

#audescription {
  font-family: Mplus 1p;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: #616161;
}

#contactus {
  font-family: Mplus 1p;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 80px;
  text-align: center;
  color: #368ea1;
}

#cudescription {
  font-family: Mplus 1p;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #616161;
}
</style>