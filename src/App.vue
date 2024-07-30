<template>
  <!--<BubbelsPage />-->
  <!--<AboutMePage />-->
  <NavBar />
  <RouterView />
</template>

<script>
//import AboutMePage from "./pages/about_me.vue";
//import BubbelsPage from "./pages/bubbles_page.vue";
//import BlogsPage from "./pages/blogs_page.vue";
import NavBar from "./components/shared_components/navbar.vue";
export default {
  name: "App",
  components: {
    //AboutMePage,
    //BubbelsPage,
    //BlogsPage,
    NavBar,
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
