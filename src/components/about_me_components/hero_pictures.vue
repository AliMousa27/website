<template>
  <div
    v-if="use_cards"
    class="row justify-content-center"
    style="transform: translateY(0px)"
  >
    <div class="col-12 text-center">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        class="img-fluid"
        :id="'image-' + index"
      />
    </div>
  </div>
  <div v-else>
    <CarouselSlides :images="images" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import CarouselSlides from "../shared_components/carousel.vue";

//reactive variable to tell vue to switch to Carousel when the size is too small
var use_cards = ref(window.innerWidth > 900);

const updateUseCards = () => {
  use_cards.value = window.innerWidth > 900;
};
//add this functions only when the window is being resized when the component is mounted
onMounted(() => {
  window.addEventListener("resize", updateUseCards);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateUseCards);
});
</script>

<script>
export default {
  name: "HeroPictures",
  components: {
    CarouselSlides,
  },
  data() {
    return {
      images: [
        require("@/assets/about_me/view.jpg"),
        require("@/assets/about_me/cat.jpg"),
        require("@/assets/about_me/me.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
img {
  border-radius: 20px;
  position: absolute;
  left: 50%;
  margin-left: -150px;
}

@media (max-width: 768px) {
  img {
    max-width: 50%;
  }
}

#image-0 {
  z-index: -1;
  animation: move_right 1s ease forwards;
  animation-delay: 750ms;
}

#image-1 {
  z-index: -2;
  animation: move_left 750ms ease forwards;
  animation-delay: 500ms;
}

@keyframes move_right {
  0% {
    transform: perspective(1000px) translateX(0px) translateZ(0px);
  }
  100% {
    transform: perspective(1000px) translateX(350px) translateZ(-300px);
  }
}

@keyframes move_left {
  0% {
    transform: perspective(1000px) translateX(0px) translateZ(0px);
  }
  100% {
    transform: perspective(1000px) translateX(-350px) translateZ(-300px);
  }
}
</style>
