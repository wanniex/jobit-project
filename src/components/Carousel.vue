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
    <b-carousel-slide img-src="https://firebasestorage.googleapis.com/v0/b/jobit-38c72.appspot.com/o/clonateimages%2Frsclothing-pile-image.jpg?alt=media&token=c2a1fb69-b343-46ca-989e-c609658a37df">
      <h1>
        166,600 tonnes of textile waste are generated in Singapore annually.
      </h1>
    </b-carousel-slide>

    <!-- Slides with custom text -->
    <b-carousel-slide img-src="https://firebasestorage.googleapis.com/v0/b/jobit-38c72.appspot.com/o/clonateimages%2Frgarbage-image.jpg?alt=media&token=3c087ac1-db00-485a-bdd0-cc394b3c60a6">
      <h1>Only 4% of textile waste are recycled in Singapore annually.</h1>
    </b-carousel-slide>

    <!-- Slides with image only -->
    <b-carousel-slide
      img-src="https://firebasestorage.googleapis.com/v0/b/jobit-38c72.appspot.com/o/clonateimages%2Fwater-resized.jpg?alt=media&token=b5276fb0-c0c8-49cd-9beb-75da842ab5d0"
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
          src="https://firebasestorage.googleapis.com/v0/b/jobit-38c72.appspot.com/o/clonateimages%2Fcotton-new.jpg?alt=media&token=232f1a34-78a6-43c2-bc54-21d99bad33d4"
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
