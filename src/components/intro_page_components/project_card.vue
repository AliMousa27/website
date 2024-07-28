<template>
  <div class="" style="width: 80vw">
    <div class="row project_container d-flex align-items-center">
      <div class="col-7 carousel_container">
        <CarouselSlides ref="carouselSlides" :images="images"></CarouselSlides>
      </div>
      <div class="col-5 text_container">
        <Shine project_title="this is just a project title" />
        <p>
          Don't try to learn and remember everything.Its not required. If you
          are facing problems in css break it into simple concepts. Box model,
          inline-block elements, difference between padding and margin and their
          to use chrome - developer tools or firebug. Inspect element and you
          will see its css at bottom right of panel.
        </p>
        <div class="row">
          <div
            class="col-lg-12 text-center"
            style="display: flex; justify-content: center"
          >
            <InfiniteScrollTags></InfiniteScrollTags>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Shine from "../shared_components/shine.vue";
import CarouselSlides from "../shared_components/carousel.vue";
import InfiniteScrollTags from "./infinte_tag.vue";
export default {
  name: "ProjectCard",
  components: {
    Shine,
    CarouselSlides,
    InfiniteScrollTags,
  },
  mounted() {
    const adjustClasses = () => {
      const projects = document.querySelectorAll(".project_container");
      const screenWidth = window.innerWidth;

      projects.forEach((project, index) => {
        const carouselContainer = project.querySelector(".carousel_container");
        const textContainer = project.querySelector(".text_container");

        const isSmallScreen = screenWidth < 1400;
        const isEvenIndex = index % 2 === 0;

        if (isSmallScreen) {
          setSmallScreenClasses(carouselContainer, textContainer, project);
        } else {
          setLargeScreenClasses(
            carouselContainer,
            textContainer,
            project,
            isEvenIndex
          );
        }
      });
    };

    const setSmallScreenClasses = (
      carouselContainer,
      textContainer,
      project
    ) => {
      carouselContainer.classList.remove("col-7");
      textContainer.classList.remove("col-5");
      carouselContainer.classList.add("col-12");
      textContainer.classList.add("col-12");
      project.classList.add("row");
      project.classList.remove("d-flex", "flex-row-reverse");
    };

    const setLargeScreenClasses = (
      carouselContainer,
      textContainer,
      project,
      isEvenIndex
    ) => {
      carouselContainer.classList.remove("col-12");
      textContainer.classList.remove("col-12");
      carouselContainer.classList.add("col-7");
      textContainer.classList.add("col-5");

      if (isEvenIndex) {
        project.classList.remove("row");
        project.classList.add("d-flex", "flex-row-reverse");
        textContainer.style.marginRight = "50px";
      } else {
        project.classList.remove("d-flex", "flex-row-reverse");
        textContainer.style.marginRight = "";
      }
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
  props: {
    images: {
      type: Array,
      required: true,
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
  font-weight: 300;
  font-size: 25px;
  color: white;
  transition: transform 250ms ease-out;
}

@media (max-width: 576px) {
  .text_container {
    font-size: 14px !important;
  }
}
</style>
