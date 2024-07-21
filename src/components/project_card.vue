<template>
  <div class="project_container">
    <div class="img_container">
      <img
        src="data:image/jpeg;base64,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"
        width="auto"
        height="500"
        class="project_image"
      />
    </div>
    <div class="text_container">
      <h1 class="project_title">this is just a project title</h1>
      <p class="project_paragraph">
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
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectCard",

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      const images = document.querySelectorAll(".project_image");
      images.forEach((image, index) => {
        if (this.isInViewport(image)) {
          this.animateImage(image, index);
        }
      });
      if ([...images].every((image) => image.style.opacity == 1)) {
        window.removeEventListener("scroll", this.handleScroll);
      }
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
    animateImage(img, index) {
      const text_container = img.parentElement.nextElementSibling;
      if (index % 2 != 0) {
        const project_container = img.closest(".project_container");
        project_container.classList.add("reverse");
        text_container.style.marginRight = "50px";
      }

      text_container.style.transition = "opacity 1s, transform 1s";
      text_container.style.opacity = 1;
      text_container.style.transform = "translateY(-100px)";

      img.style.transition = "opacity 1s, transform 1s";
      img.style.opacity = 1;
      img.style.transform = "translateY(-100px)";
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

.img_container {
  width: fit-content;
  height: fit-content;
  position: relative;
  transform: scale(1);
  transition: transform 250ms ease-out;
}
.img_container:hover {
  transform: scale(1.1);
}
.project_image {
  opacity: 0;
  border-radius: 20px;
  transition: transform 250ms ease-out;
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
