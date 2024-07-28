<template>
  <div :id="this.id" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner carousel-image">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <img :src="image" class="d-block w-100" alt="..." />
      </div>
    </div>
    <div v-if="images.length > 1">
      <button
        class="carousel-control-prev"
        type="button"
        :data-bs-target="'#' + this.id"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        :data-bs-target="'#' + this.id"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselSlides",

  data() {
    return {
      id: "carouselControls" + Math.random().toString(36).substring(2, 24),
    };
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.img_container {
  width: fit-content;
  height: fit-content;
  position: relative;
  transform: scale(1);
  transition: transform 250ms ease-out;
  opacity: 1;
}
.carousel-inner {
  width: 100%;
  height: auto;
}

img {
  height: auto;
  width: 90%;
  object-fit: cover;
}

@media only screen and (max-width: 1200px) {
  .carousel-inner {
    width: 100%;
    height: auto;
  }
}

@media only screen and (max-width: 900px) {
  .carousel {
    width: 100% !important;
    height: 100% !important;
  }
  .carousel-inner {
    width: 100% !important;
    height: 100% !important;
  }
}

.carousel-item img {
  width: 100%;
  height: 100%; /* Set a fixed height */
  object-fit: cover; /* Ensure the image covers the area without distortion */
}
</style>
