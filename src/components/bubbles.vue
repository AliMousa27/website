<template>
  <div class="background">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
    <div class="circle5"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.background {
  background: linear-gradient(40deg, #6c003e, #001152);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.circle1 {
  width: 80%;
  height: 80%;

  background: radial-gradient(
      circle at center,
      rgba(0, 22, 222, 0.8) 0%,
      rgba(0, 33, 5, 0) 35%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  position: absolute;
  opacity: 1;
  top: calc(50% - 80% / 2);
  left: calc(50% - 80% / 2);
  transform-origin: center center;
}
</style>
