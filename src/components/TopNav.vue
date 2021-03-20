<template>
  <div>
    <img src="../assets/Jobit_logo.png" alt="Jobit" />
    <div class="whitebar">
      <ul>
        <li><a href="https://www.google.com.sg/">Home</a></li>
        <li><a href="https://www.google.com.sg/">News</a></li>
        <li><a href="https://www.google.com.sg/">Contact</a></li>
        <li><a href="https://www.google.com.sg/">About</a></li>
      </ul>
      <signup-btn class="signup-button"></signup-btn>
      <login-btn class="login-button"></login-btn>
    </div>
    <div class="tealseparator"></div>
  </div>
</template>


<script>
import SignupBtn from "./SignupBtn.vue";
import LoginBtn from "./LoginBtn.vue";

export default {
  components: {
    loginBtn: LoginBtn,
    signupBtn: SignupBtn,
  },
};
</script>


<style scoped>
img {
  width: 149px;
  height: 71px;
  left: 42px;
  top: 5px;
  z-index: 950;
  background: url(../assets/Jobit_logo.png);
  float: left;
  margin-left: 20px;
}

.tealseparator {
  background-color: #0094b6;
  height: 10px;
}

.whitebar {
  background-color: #ffffff;
  height: 80px;
}

.signup-button {
  position: absolute;
  width: 83px;
  height: 10px;
  left: 50px;
  top: 10px;
}

.login-button {
  position: absolute;
  width: 83px;
  height: 10px;
  left: 200px;
  top: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffffff;
  display: inline-block;
  text-align: center;
  margin-left: 100px;
  margin-top: 34px;
}

li {
  float: left;
}

li a {
  display: block;
  color: #000000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  transition: 0.2s;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #7ab7c5;
  color: white;
}
</style>