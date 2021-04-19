<template>
  <div class="justify-content-center animated fadeInRight">
    <b-container>
      <b-row align-h="center" class="mt-5 mb-3">
        <h1>Edit your profile</h1>
      </b-row>

      <b-row align-h="center">
        <b-avatar
          v-bind:src="profilepic"
          id="profilepic"
          size="8em"
          class="mt-3 mb-3"
        ></b-avatar>
      </b-row>

      <b-row align-h="center" class="mb-3">
        <h4>{{ this.username }}</h4>
      </b-row>

      <b-row align-h="center" class="mb-2">
        <b-button
          id="button"
          class="btn btn-primary mx-auto d-block"
          @click="$router.push('EditUsername')"
          >Change Username</b-button
        >
      </b-row>

      <b-row align-h="center" class="mb-2">
        <b-button
          id="button"
          class="btn btn-primary mx-auto d-block"
          @click="$router.push('EditPhoto')"
          >Change Profile Photo</b-button
        >
      </b-row>

      <b-row align-h="center" class="mb-5">
        <b-button
          id="button"
          class="btn btn-primary mx-auto d-block"
          @click="$router.push('EditPassword')"
          >Change Password</b-button
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import fb from "firebase";

export default {
  data() {
    return {
      uid: null,
      profilepic: "hello",
      username: "",
    };
  },
  methods: {
    getprofilepic() {
      fb.storage()
        .ref("users/" + this.uid + "/profile.jpg")
        .getDownloadURL()
        .then((imgURL) => {
          this.profilepic = imgURL;
        });
    },
    getuserinfo() {
            fb.firestore().collection('users').doc(this.uid).get().then(snapshot => {
                this.username = snapshot.data().name;
                this.username = this.username.charAt(0).toUpperCase() + this.username.slice(1);
            })
        },
  },
  created() {
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.uid = fb.auth().currentUser.uid;
        this.getprofilepic();
        this.getuserinfo();
      } else {
        // No user is signed in.
      }
    });

  },
};
</script>

<style scoped>

#button {
  background-color: #87ebd3!important;
  color: #4d4b4b!important;
  border: none;
  transition-duration: 0.4s;
  text-transform: none;
  width:200px;
}

#button:hover {
  background-color: rgb(212, 212, 212)!important;
  color: rgb(255, 255, 255)!important;
}

#profilepic {
  color:white!important;
  background-color:grey!important;
}
</style>