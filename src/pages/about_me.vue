<template>
  <div ref="vantaRef">
    <div
      class="container-fluid d-flex justify-content-center align-items-center vh-100 flex-column"
      style="flex-direction: column"
    >
      <div class="border container scrollable-content text-center">
        <div class="row align-items-start">
          <div class="col"><HeroPictures /></div>
        </div>
        <div class="row align-items-center" style="margin-top: 600px">
          <div class="col">
            <ShineText :is_contact_shine="false" project_title="About Me" />
            <p class="scrollable-paragraph">
              no purse as fully me or point. Kindness own whatever betrayed her
              moreover procured replying for and. Proposal indulged no do do
              sociable he throwing settling. Covered ten nor comfort offices
              carried. Age she way earnestly the fulfilled extremely. Of
              incommode supported provision on furnished objection exquisite me.
              Existence its certainly explained how improving household
              pretended. Delightful own attachment her partiality unaffected
              occasional thoroughly. Adieus it no wonder spirit houses. Picture
              removal detract earnest is by. Esteems met joy attempt way clothes
              yet demesne tedious. Replying an marianne do it an entrance
              advanced. Two dare say play when hold. Required bringing me
              material stanhill jointure is as he. Mutual indeed yet her living
              result matter him bed whence.
            </p>
          </div>
        </div>
        <div class="row align-items-end">
          <div class="col">
            <ShineText
              :is_contact_shine="false"
              project_title="some other section"
            />
            <p class="scrollable-paragraph">
              no purse as fully me or point. Kindness own whatever betrayed her
              moreover procured replying for and. Proposal indulged no do do
              sociable he throwing settling. Covered ten nor comfort offices
              carried. Age she way earnestly the fulfilled extremely. Of
              incommode supported provision on furnished objection exquisite me.
              Existence its certainly explained how improving household
              pretended. Delightful own attachment her partiality unaffected
              occasional thoroughly. Adieus it no wonder spirit houses. Picture
              removal detract earnest is by. Esteems met joy attempt way clothes
              yet demesne tedious. Replying an marianne do it an entrance
              advanced. Two dare say play when hold. Required bringing me
              material stanhill jointure is as he. Mutual indeed yet her living
              result matter him bed whence.
            </p>
          </div>
        </div>
        <div class="row align-items-end">
          <div class="col">
            <ShineText
              :is_contact_shine="false"
              project_title="some other section"
            />
            <p class="scrollable-paragraph">
              no purse as fully me or point. Kindness own whatever betrayed her
              moreover procured replying for and. Proposal indulged no do do
              sociable he throwing settling. Covered ten nor comfort offices
              carried. Age she way earnestly the fulfilled extremely. Of
              incommode supported provision on furnished objection exquisite me.
              Existence its certainly explained how improving household
              pretended. Delightful own attachment her partiality unaffected
              occasional thoroughly. Adieus it no wonder spirit houses. Picture
              removal detract earnest is by. Esteems met joy attempt way clothes
              yet demesne tedious. Replying an marianne do it an entrance
              advanced. Two dare say play when hold. Required bringing me
              material stanhill jointure is as he. Mutual indeed yet her living
              result matter him bed whence.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BIRDS from "vanta/dist/vanta.birds.min";
import ShineText from "../components/intro_page_components/shine.vue";
import HeroPictures from "../components/about_me_components/hero_pictures.vue";
import { onBeforeMount } from "vue";
export default {
  name: "AboutMePage",
  components: {
    HeroPictures,
    ShineText,
  },
  mounted() {
    const screen_height = window.innerHeight;
    const screen_width = window.innerWidth;
    this.vantaEffect = BIRDS({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: screen_height,
      minWidth: screen_width,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x0,
      color1: 0xfa6ce2,
      color2: 0x5b5be6,
      colorMode: "lerpGradient",
      birdSize: 1.3,
      separation: 50.0,
      alignment: 20.0,
    });

    window.addEventListener("resize", this.updateVanta);
    onBeforeMount(() => {
      window.removeEventListener("resize", this.updateVanta);
    });
  },

  methods: {
    updateVanta() {
      this.vantaEffect.resize();
    },
  },
};
</script>

<style scoped>
.scrollable-content {
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

p {
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 25px;
}
</style>
