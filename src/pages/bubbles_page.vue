<template>
  <NavBar></NavBar>

  <IntroText />
  <div class="gradient-bg">
    <BubblesBackground> </BubblesBackground>
  </div>
  <div
    class="container-fluid"
    id="first_divider"
    style="width: 100vw; padding: 0"
  >
    <PageCurve></PageCurve>
  </div>
  <div class="projects_container">
    <ProjectCard :images="website_images" />
    <ProjectCard :images="snake_images" />
    <ProjectCard :images="let_bro_cook_images" />
    <ProjectCard :images="toothtrek_images" />
  </div>

  <div style="height: 23vw; transform: translateY(-30vw)">
    <PageCurve></PageCurve>
  </div>
  <PageFooter></PageFooter>
</template>

<script>
import BubblesBackground from "../components/intro_page_components/bubbles_background.vue";
import IntroText from "../components/intro_page_components/intro_text.vue";
import NavBar from "../components/shared_components/navbar.vue";
import ProjectCard from "../components/intro_page_components/project_card.vue";
import PageCurve from "../components/intro_page_components/curve.vue";
import PageFooter from "../components/shared_components/footer.vue";
export default {
  name: "BubbelsPage",
  components: {
    NavBar,
    IntroText,
    BubblesBackground,
    PageCurve,
    ProjectCard,
    PageFooter,
  },
  mounted() {
    const all = document.querySelectorAll("*");
    all.forEach((el) => {
      if (el.getBoundingClientRect().width > window.innerWidth) {
        console.log(el);
      }
    });
  },
  data() {
    return {
      test_images: [
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "https://i.pinimg.com/originals/91/9c/57/919c5719579d855d1fa9e1c128a80d64.jpg",
      ],
      snake_images: [
        require("@/assets/snake_menu.png"),
        require("@/assets/snake_grid.png"),
        require("@/assets/snake_skins.png"),
      ],
      website_images: [
        require("@/assets/about_me.png"),
        require("@/assets/bubbles.png"),
      ],
      let_bro_cook_images: [
        require("@/assets/let_bro_cook_signup.png"),
        require("@/assets/let_bro_cook_home.png"),
      ],
      toothtrek_images: [require("@/assets/temp.png")],
    };
  },
};
</script>

<style scoped>
@media (max-width: 1006px) {
  #first_divider {
    transform: translateY(-50%) !important;
  }
}

#first_divider {
  transform: translateY(-25%) !important;
}

.projects_container {
  opacity: 1 !important;
  display: flex;
  margin-top: 200px;
  position: relative;
  z-index: 11 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 200px;
  background: black;
  box-sizing: border-box;
}

.gradient-bg {
  overflow-x: clip;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: black;
  top: 0;
  left: 0;
  z-index: -11;
}
</style>
<style>
html body {
  overflow-x: hidden !important;
  background: black !important;
  font-family: "Roboto", sans-serif !important;
  width: 100vw !important;
}
</style>
