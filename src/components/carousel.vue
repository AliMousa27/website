<template>
  <div
    :id="this.id"
    class="carousel slide border border-danger"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev border border-light"
      type="button"
      :data-bs-target="'#' + this.id"
      data-bs-slide="prev"
    ></button>
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
</template>

<script>
export default {
  name: "CarouselSlides",

  data() {
    return {
      id: "carouselControls" + Math.random().toString(36).substring(2, 24),
    };
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
  width: 40vw;
  height: auto;
}

img {
  height: auto;
  width: 90%;
  object-fit: cover;
}

@media only screen and (max-width: 1200px) {
  .carousel-inner {
    width: 40vw;
    height: auto;
  }
}

@media only screen and (max-width: 900px) {
  .carousel {
    width: 98% !important;
    height: 100% !important;
  }
  .carousel-inner {
    width: 98% !important;
    height: 100% !important;
  }
}
</style>
