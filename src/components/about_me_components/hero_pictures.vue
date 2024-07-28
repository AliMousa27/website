<template>
  <div v-if="use_cards" class="move_down">
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <img src="https://place-hold.it/300x500" class="img-fluid" id="first" />
        <img
          id="second"
          src="https://place-hold.it/300x500"
          class="img-fluid"
        />
        <img id="third" src="https://place-hold.it/300x500" class="img-fluid" />
      </div>
    </div>
  </div>
  <div v-else>
    <CarouselSlides />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
//reactive variable
var use_cards = ref(window.innerWidth > 900);

const updateUseCards = () => {
  use_cards.value = window.innerWidth > 900;
};
onMounted(() => {
  window.addEventListener("resize", updateUseCards);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateUseCards);
});
</script>

<script>
import CarouselSlides from "../shared_components/carousel.vue";

export default {
  name: "HeroPictures",
  components: {
    CarouselSlides,
  },
};
</script>

<style scoped>
.move_down {
  transform: translateY(-500px);
  animation: move_vertically 1s ease forwards;
}
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

#second {
  z-index: -1;
  animation: move_right 1s ease forwards;
  animation-delay: 1s;
}

#third {
  z-index: -2;
  animation: move_left 1s ease forwards;
  animation-delay: 1s;
}

@keyframes move_vertically {
  0% {
    transform: translateY(-500px);
  }
  100% {
    transform: translateY(0px);
  }
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
