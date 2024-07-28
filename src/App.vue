<template>
  <!--<BubbelsPage />-->
  <HeroPictures></HeroPictures>
</template>

<script>
//import BubbelsPage from "./pages/bubbles_page.vue";
import HeroPictures from "./components/about_me_components/hero_pictures.vue";
export default {
  name: "App",
  components: {
    //BubbelsPage,
    HeroPictures,
  },
};
</script>

<style>
html body {
  overflow-x: hidden;
  background: black;
  width: 100vw !important;
}
</style>
