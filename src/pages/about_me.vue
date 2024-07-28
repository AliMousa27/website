<template>
  <div ref="vantaRef">Foreground content here</div>
</template>

<script>
import BIRDS from "vanta/dist/vanta.birds.min";

export default {
  name: "AboutMePage",
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
    const updateVanta = () => {
      this.vantaEffect.setOptions({
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
      });
      this.vantaEffect.resize();
    };
    window.addEventListener("resize", updateVanta);
  },
  beforeUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
    window.removeEventListener("resize", this.updateVanta);
  },
};
</script>
