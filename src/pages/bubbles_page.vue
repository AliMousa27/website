<template>
  <NavBar></NavBar>

  <IntroText />

  <!--<BubblesBackground> </BubblesBackground>-->
</template>

<script>
//import BubblesBackground from "../components/bubbles_background.vue";
import IntroText from "../components/intro_text.vue";
import NavBar from "../components/navbar.vue";
export default {
  name: "BubbelsPage",
  components: {
    NavBar,
    IntroText,
    //BubblesBackground,
  },
};
</script>
