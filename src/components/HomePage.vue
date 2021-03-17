<template>
  <div>
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
  </div>
</template>


<script>
export default {
  data() {
    return {
      imageURL: "https://i.imgur.com/yrhowMy.jpg",
    };
  },
};
</script>


<style scoped>
#itemsList {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}

#pic {
  position: absolute;
  width: 539px;
  height: 810px;
  left: -5px;
  top: 92px;
}

#content {
  position: absolute;
  width: 775px;
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