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
    <ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard />
  </div>

  <div style="height: 23vw; transform: translateY(-30vw)">
    <PageCurve></PageCurve>
  </div>
  <div
    class="d-flex justify-content-center align-items-center"
    id="socials_row"
  >
    <SocialsIcon></SocialsIcon>
  </div>

  <hr
    style="border-top: 1px solid white; width: 100vw; margin: 0; padding: 0"
  />
  <h5
    style="
      color: white;
      text-align: center;
      margin-top: 50px;
      font-size: 20px;
      padding-bottom: 50px;
    "
  >
    © Copyrights 2024 . Ali Mousa
  </h5>
</template>

<script>
import BubblesBackground from "../components/bubbles_background.vue";
import IntroText from "../components/intro_text.vue";
import NavBar from "../components/navbar.vue";
import ProjectCard from "../components/project_card.vue";
import PageCurve from "../components/curve.vue";
import SocialsIcon from "../components/socials_icon.vue";
export default {
  name: "BubbelsPage",
  components: {
    NavBar,
    IntroText,
    BubblesBackground,
    PageCurve,
    ProjectCard,
    SocialsIcon,
  },
  mounted() {
    const all = document.querySelectorAll("*");
    all.forEach((el) => {
      if (el.getBoundingClientRect().width > window.innerWidth) {
        console.log(el);
      }
    });
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

#socials_row {
  margin-top: 20vw;
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
