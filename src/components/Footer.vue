<template>
  <div class="sticky">
    <div class="tealseparator"></div>
    <span>
      <p class="alignleft">
        <router-link to = '/' class="padding">Home</router-link>
        <!-- <a href="https://www.google.com.sg/">Contact Us</a> -->
      </p>
      <p class="alignright">Copyright &#169; 2021 JobIt All rights reserved.</p>
    </span>
  </div>
</template>

<script>
</script>

<style scoped>
.sticky {
  position: sticky;
}
.tealseparator {
  background-color: #87ebd3;
  height: 15px;
}
.padding {
  padding-right: 120px;
}
.alignleft {
  padding-left: 150px;
  float: left;
}
.alignright {
  float: right;
  padding-right: 150px;
  color: #d7dbdd;
}


a {
  color: #000000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  font-family: Verdana;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;
}
</style>