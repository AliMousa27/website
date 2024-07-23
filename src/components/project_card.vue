<template>
  <div class="row project_container">
    <div class="col-7 border border-primary carousel_container">
      <CarouselSlides ref="carouselSlides"></CarouselSlides>
    </div>
    <div class="col-5 border border-danger text_container">
      <Shine project_title="this is just a project title" />
    </div>
  </div>

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
    const adjustClasses = () => {
      const projects = document.querySelectorAll(".project_container");
      const screenWidth = window.innerWidth;

      projects.forEach((project) => {
        const carouselContainer = project.querySelector(".carousel_container");
        const textContainer = project.querySelector(".text_container");

        if (screenWidth < 768 && carouselContainer && textContainer) {
          carouselContainer.classList.remove("col-7");
          textContainer.classList.remove("col-5");
          carouselContainer.classList.add("col-12");
          textContainer.classList.add("col-12");
        } else {
          carouselContainer.classList.remove("col-12");
          textContainer.classList.remove("col-12");
          carouselContainer.classList.add("col-7");
          textContainer.classList.add("col-5");
        }
      });
    };
    const handleScroll = () => {
      const projects = document.querySelectorAll(".project_container");
      projects.forEach((project) => {
        if (this.isInViewport(project)) {
          this.animateProject(project);
        }
      });
    };

    adjustClasses();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", adjustClasses);
  },
  methods: {
    isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top + rect.height / 4 < window.innerHeight &&
        rect.left + rect.width / 4 < window.innerWidth &&
        rect.top + rect.height / 4 > 0 &&
        rect.left + rect.width / 4 > 0
      );
    },

    animateProject(project) {
      project.style.transition = "opacity 1s, transform 1s";
      project.style.opacity = 1;
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
  opacity: 0;
}

.reverse {
  flex-direction: row-reverse !important;
}

.text_container {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: white;

  transition: transform 250ms ease-out;
}

@media (max-width: 768px) {
  .project_entry {
    flex-direction: column !important;
  }
}
</style>
