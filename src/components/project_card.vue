<template>
  <CarouselSlides ref="carouselSlides"></CarouselSlides>

  <div class="text_container">
    <Shine project_title="this is just a project title" />
    <!--<p class="project_paragraph">
        Don't try to learn and remember everything.Its not required. If you are
        facing problems in css break it into simple concepts. Box model,
        inline-block elements, difference between padding and margin and their
        behaviour, border attributes, font attributes and so on. Easiest way is
        to use chrome - developer tools or firebug. Inspect element and you will
        see its css at bottom right of panel. You can tinker with the element
        style there and readily see changes on the page. Also develop a keen
        observarion about the style of different sites. Once you start looking
        that way you won't need to memorize anything. Instead you will be able
        to grasp how various pieces of style fit in together.
      </p>-->
  </div>
</template>
<script>
import Shine from "./shine.vue";
import CarouselSlides from "./carousel.vue";
export default {
  name: "ProjectCard",
  components: {
    Shine,
    CarouselSlides,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      const images = document.querySelectorAll(".img_container");
      images.forEach((image) => {
        if (this.isInViewport(image)) {
          this.animateImage(image);
        }
      });
    },
    isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top + rect.height / 4 < window.innerHeight &&
        rect.left + rect.width / 4 < window.innerWidth &&
        rect.top + rect.height / 4 > 0 &&
        rect.left + rect.width / 4 > 0
      );
    },
    animateImage(image) {
      const text_container = image.nextElementSibling;
      text_container.style.transition = "opacity 1s, transform 1s";
      text_container.style.opacity = 1;
      text_container.style.transform = "translateY(-100px)";

      image.style.transition = "opacity 1s, transform 1s";
      image.style.opacity = 1;
      image.style.transform = "translateY(-100px)";
    },
  },
  computed: {
    carouselId() {
      return this.$refs.carouselSlides
        ? this.$refs.carouselSlides.id
        : undefined;
    },
  },
};
</script>

<style scoped>
.project_container {
  display: flex;
  flex-direction: row;
  width: 70%;
  left: 15vw;
  overflow: visible;
  position: relative;
}

.reverse {
  flex-direction: row-reverse !important;
}

.text_container {
  margin-left: 50px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: white;
  width: 50%;
  height: fit-content;
  opacity: 0;
  transition: transform 250ms ease-out;
}
</style>
