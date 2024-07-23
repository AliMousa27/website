<template>
  <div
    :id="this.id"
    class="carousel slide img_container"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner" style="width: 500px">
      <div class="carousel-item active">
        <img
          src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
          class="d-block w-100 img-fluid"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          class="d-block w-100 img-fluid"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="'#' + this.id"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
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
</template>

<script>
export default {
  name: "CarouselSlides",

  data() {
    return {
      id:
        "carouselExampleControls" + Math.random().toString(36).substring(2, 24),
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
  opacity: 0;
}
img {
  width: 300px;
  height: 400px;
  object-fit: cover;
}
</style>
