<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="2500"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- Text slides with image -->
    <b-carousel-slide img-src="https://i.imgur.com/VSfuaad.jpg">
      <h1>
        166,600 tonnes of textile waste are generated in Singapore annually.
      </h1>
    </b-carousel-slide>

    <!-- Slides with custom text -->
    <b-carousel-slide img-src="https://i.imgur.com/xdXjWLP.jpg">
      <h1>Only 4% of textile waste are recycled in Singapore annually.</h1>
    </b-carousel-slide>

    <!-- Slides with image only -->
    <b-carousel-slide
      img-src="https://i.imgur.com/kZ6PjuB.jpg"
    >
    <h1>Over 700 gallons of water is used to manufacture just one T-shirt.</h1>
    </b-carousel-slide>

    <!-- Slides with img slot -->
    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
    <b-carousel-slide>
      <template #img>
        <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://i.imgur.com/MrM7oFJ.jpg"
          alt="image slot"
        />
      </template>
      <h1>1/3 pounds of pesticides are used to grow the cotton used to manufacture just one T-shirt.</h1>
    </b-carousel-slide>

  </b-carousel>
</template>

<script>

export default {
    data() {
    return {
      slide: 0,
      sliding: true,
      imageURL: "https://i.imgur.com/kLbiwtb.png",
      clothesimg: "https://i.imgur.com/03sVNdK.png",
      womanimg: "https://i.imgur.com/dr8DLP8.png",
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
}
</script>

<style scoped>

</style>
