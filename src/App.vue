<template>
  <!--<BubbelsPage />-->
  <!--<AboutMePage />-->
  <BlogsPage />
</template>

<script>
//import AboutMePage from "./pages/about_me.vue";
//import BubbelsPage from "./pages/bubbles_page.vue";
import BlogsPage from "./pages/blogs_page.vue";
export default {
  name: "App",
  components: {
    //AboutMePage,
    //BubbelsPage,
    BlogsPage,
  },
};
</script>

<style>
html body {
  overflow-x: hidden;
  background: black;
  width: 100vw;
}
</style>
