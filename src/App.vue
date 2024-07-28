<template>
  <BubbelsPage />
  <!--<AboutMePage />-->
</template>

<script>
//import AboutMePage from "./pages/about_me.vue";

import BubbelsPage from "./pages/bubbles_page.vue";
export default {
  name: "App",
  components: {
    //AboutMePage,
    BubbelsPage,
  },
  mounted() {
    const all_el = document.querySelectorAll("*");
    const width = window.innerWidth;
    all_el.forEach((el) => {
      if (el.getBoundingClientRect().width > width) {
        console.log(el);
      }
    });
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
