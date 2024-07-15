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
  name: "BubbelsPage",
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
  overflow: hidden;
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

/*CHANGE COLOR*/
.circle2 {
  width: 80%;
  height: 80%;

  background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(0, 33, 5, 0) 35%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  position: absolute;
  opacity: 1;
  top: calc(50% - 80% / 2 - 100px);
  left: calc(50% - 80% / 2 - 300px);
  transform-origin: center center;
}
/*CHANGE COLOR*/
.circle3 {
  width: 80%;
  height: 80%;

  background: radial-gradient(
      circle at center,
      rgba(252, 10, 103, 0.8) 0%,
      rgba(0, 33, 5, 0) 35%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  position: absolute;
  opacity: 1;
  top: calc(50% - 80% / 2 + 300px);
  left: calc(50% - 80% / 2 - 500px);
  transform-origin: center center;
}
.circle4 {
  width: 80%;
  height: 80%;

  background: radial-gradient(
      circle at center,
      rgba(224, 226, 88, 0.8) 0%,
      rgba(107, 207, 77, 0) 35%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  position: absolute;
  opacity: 1;
  top: calc(50% - 80% / 2 + 300px);
  left: calc(50% - 80% / 2 + 500px);
  transform-origin: center center;
}

.circle5 {
  width: 80%;
  height: 80%;

  background: radial-gradient(
      circle at center,
      rgba(71, 255, 224, 0.8) 0%,
      rgba(33, 239, 253, 0) 35%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  position: absolute;
  opacity: 1;
  top: calc(50% - 80% / 2 - 200px);
  left: calc(50% - 80% / 2 + 400px);
  transform-origin: center center;
}
</style>
