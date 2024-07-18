<template>
  <nav class="navbar_container">
    <a class="nav_item_font nav_item_name">Ali Mousa</a>
    <a class="nav_item_font nav_item_about">About</a>
    <a class="nav_item_font nav_item_blogs">Blogs</a>
    <a class="nav_item_font nav_item_contact">Contact me</a>
  </nav>
  <IntroText />
  <BubblesBackground />
  <div class="btn_container">
    <h3 class="discover_more">Click to discover</h3>
  </div>
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

.btn_container {
  z-index: 5;
  position: absolute;
  left: 80%;
  top: 65%;
}

.discover_more {
  cursor: pointer;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  font-size: 30px;
  color: white;
  text-decoration: none;
  display: inline-block;
  position: relative;
  mask-image: linear-gradient(
    -75deg,
    rgba(255, 255, 255, 0.6) 30%,
    #ffffff 50%,
    rgba(255, 255, 255, 0.6) 70%
  );
  mask-size: 200%;
  animation: shine 2s infinite;
}
.discover_more::after {
  content: "";
  position: absolute;
  top: 90%;
  width: 0;
  left: 0;
  height: 2px;
  background-color: white;
  transition: width 0.5s ease-in-out;
}
.discover_more:hover::after {
  width: 100%;
}
@keyframes shine {
  from {
    mask-position: 150%;
  }

  to {
    mask-position: -50%;
  }
}
</style>
