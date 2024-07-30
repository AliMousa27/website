<template>
  <NavBar />
  <RouterView />
</template>

<script>
import NavBar from "./components/shared_components/navbar.vue";
export default {
  name: "App",
  components: {
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
