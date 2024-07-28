<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="margin-top: 20vw"
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
import SocialsIcon from "./socials_icon.vue";
export default {
  name: "PageFooter",
  components: {
    SocialsIcon,
  },
};
</script>

<style scoped></style>
