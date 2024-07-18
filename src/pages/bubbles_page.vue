<template>
  <nav class="navbar_container">
    <a class="nav_item_font nav_item_name">Ali Mousa</a>
    <a class="nav_item_font nav_item_about">About</a>
    <a class="nav_item_font nav_item_blogs">Blogs</a>
    <a class="nav_item_font nav_item_contact">Contact me</a>
  </nav>
  <IntroText />
  <BubblesBackground />
</template>

<script>
import BubblesBackground from "../components/bubbles_background.vue";
import IntroText from "../components/intro_text.vue";
export default {
  name: "BubbelsPage",
  components: {
    BubblesBackground,
    IntroText,
  },
};
</script>

<style scoped>
.navbar_container {
  z-index: 1;
  position: absolute;
  width: 99vw;
  height: 10%;
  /*border: 5px solid white;*/
}

.nav_item_font {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: white;
  margin-top: 5vh;
  position: absolute;
}
.nav_item_font::after {
  content: "";
  position: absolute;
  top: 3vh;
  width: 0;
  left: 0;
  height: 2px;
  background-color: white;
  transition: width 0.5s ease-in-out;
}
.nav_item_font:hover::after {
  width: 100%;
}
.nav_item_font:hover {
  cursor: pointer;
}
.nav_item_name {
  left: 5vw;
}
.nav_item_about {
  left: 82vw;
}

.nav_item_blogs {
  left: 88vw;
}

.nav_item_contact {
  left: 94vw;
}
</style>
