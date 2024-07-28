<template>
  <AboutMePage />
</template>

<script>
import AboutMePage from "./pages/about_me.vue";
export default {
  name: "App",
  components: {
    AboutMePage,
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
