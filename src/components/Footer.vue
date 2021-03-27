<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <!-- <b-navbar-brand to="/">Home</b-navbar-brand>
    <b-navbar-brand to="/Aboutus">About Us</b-navbar-brand> -->

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/Aboutus">About Us</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav id="alignright">
          <b-nav-text
            >Copyright &#169; 2021 Clonate All rights reserved.</b-nav-text
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
</script>

<style scoped>
#alignright {
  margin-left: auto;
}

#alignleft {
  margin-right: auto;
}

.sticky {
  position: sticky;
}
</style>