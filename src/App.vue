<template>
  <NavBar />
  <RouterView />
</template>

<script setup>
import { saveMode } from "./utils";
import NavBar from "./components/shared_components/navbar.vue";
saveMode("dark");
</script>
<script>
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
