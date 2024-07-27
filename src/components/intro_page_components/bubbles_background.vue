<template>
  <div class="gradient-bg">
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div class="gradients-container">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
      <div class="circle5"></div>
      <div class="mouse_circle" id="mouse_circle"></div>
      <div class="gap_circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BubbelsPage",

  mounted() {
    var mouse_x = 0;
    var mouse_y = 0;
    var target_x = 0;
    var target_y = 0;

    const circle = document.getElementById("mouse_circle");

    onmousemove = function (e) {
      mouse_x = e.x;
      mouse_y = e.y;
    };

    function move_circle() {
      var adjusted = window.scrollY + window.innerHeight;

      if (adjusted <= window.innerHeight + window.innerHeight / 3) {
        //move circles ever closer to the mouse at a pace controlled by the divisor
        target_x += (mouse_x - target_x) / 50;
        target_y += (mouse_y - target_y) / 50;
        if (circle) {
          circle.style.transform = `translate(${target_x}px, ${target_y}px)`;
        }
      }
      requestAnimationFrame(move_circle);
    }
    move_circle();
  },
};
</script>
<style scoped>
@media (min-width: 800px) and (max-width: 1200px) {
  .gradients-container {
    margin-bottom: 20vw !important;
  }
}

@media (max-width: 800px) {
  .circle2 {
    left: calc(50% - 80% / 1.1) !important;
  }
  .circle3 {
    left: calc(50% - 80% / 6) !important;
    transform-origin: 1% !important;
  }
  .circle4 {
    left: calc(50% - 80% / 6) !important;
    transform-origin: 1% !important;
  }
  .gap_circle {
    transform: translate(30%, -10%) !important;
  }
}

@media (max-width: 1000px) {
  .circle2 {
    left: calc(50% - 80% / 1.1) !important;
  }
  .circle3 {
    left: calc(50% - 80% / 6) !important;
    transform-origin: 1% !important;
  }
  .circle4 {
    left: calc(50% - 80% / 6) !important;
    transform-origin: 1% !important;
  }
  .gap_circle {
    transform-origin: calc(25%-500px) !important;
    top: calc(50% - 60% + 350px) !important;
    left: calc(50% - 80% + 35vw) !important;
  }
}

@media (max-width: 1200px) {
  .circle4 {
    left: calc(50% - 80% / 3) !important;
    transform-origin: 1% !important;
  }
  .circle5 {
    left: calc(50% - 80% / 20) !important;
    transform-origin: -2% !important;
  }

  .gap_circle {
    transform-origin: calc(20%) !important;
    top: calc(50% - 80% /- 100px) !important;
    left: calc(50% - 80% + 35vw) !important;
  }
}
@media (max-width: 1500px) {
  .gap_circle {
    transform-origin: calc(50% + 200px) !important;
    top: 50% !important;
    left: calc(50% - 80% + 30vw) !important;
  }
}

@keyframes move_circle_vertical {
  0% {
    transform: translateY(50%);
  }
  50% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(50%);
  }
}

@keyframes move_circle_horizontal {
  0% {
    transform: translateY(20%) translateX(50%);
  }
  50% {
    transform: translateY(-20%) translateX(-50%);
  }
  100% {
    transform: translateY(20%) translateX(50%);
  }
}
@keyframes rotate_circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.gradient-bg {
  overflow-x: clip;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: black;
  top: 0;
  left: 0;
  z-index: -11;
}

.gradients-container {
  margin-bottom: 5vw;
  width: 100%;
  height: 100%;
  filter: url(#goo) blur(40px);
}

.circle1,
.circle2,
.circle3,
.circle4,
.circle5,
.gap_circle,
.mouse_circle {
  width: 80%;
  height: 80%;
  position: absolute;
  mix-blend-mode: hard-light;
  opacity: 1;
}

.circle1 {
  background: radial-gradient(
      circle at center,
      rgba(18, 113, 255, 0.8) 0%,
      rgba(18, 113, 255, 0) 40%
    )
    no-repeat;
  top: calc(50% - 80% / 2);
  left: calc(50% - 80% / 2);
  transform-origin: center center;
  animation: 30s linear infinite move_circle_horizontal reverse;
}

.circle2 {
  background: radial-gradient(
      circle at center,
      rgba(221, 74, 255, 0.8) 0%,
      rgba(221, 74, 255, 0) 50%
    )
    no-repeat;
  top: calc(50% - 80% / 2 - 100px);
  left: calc(50% - 80% / 2 - 300px);
  animation: 25s linear infinite move_circle_vertical;
}

.circle3 {
  background: radial-gradient(
      circle at center,
      rgba(100, 220, 255, 0.8) 0%,
      rgba(100, 220, 255, 0) 40%
    )
    no-repeat;
  top: calc(50% - 80% / 2);
  left: calc(50% - 80% / 2 + 200px);
  transform-origin: calc(50% - 400px);
  animation: 20s linear infinite rotate_circle;
}

.circle4 {
  background: radial-gradient(
      circle at center,
      rgba(200, 50, 50, 0.8) 0%,
      rgba(200, 50, 50, 0) 40%
    )
    no-repeat;
  top: calc(50% - 80% / 2 + 100px);
  left: calc(50% - 80% / 2);
  transform-origin: calc(50% + 400px);
  animation: 20s ease infinite rotate_circle;
}

.gap_circle {
  background: radial-gradient(
      circle at center,
      rgba(255, 128, 244, 0.8) 0%,
      rgba(82, 15, 76, 0) 40%
    )
    no-repeat;
  top: calc(50% - 80% / 2 + 600px);
  left: calc(50% - 80% / 2 + 200px);
  transform-origin: calc(50% + 300px);
  animation: 30s ease infinite rotate_circle;
}

.circle5 {
  background: radial-gradient(
      circle at center,
      rgba(180, 180, 50, 0.8) 0%,
      rgba(180, 180, 50, 0) 40%
    )
    no-repeat;
  top: calc(50% - 80% / 2 - 50px);
  left: calc(50% - 80% / 2 + 400px);
  transform-origin: calc(50% - 600px) calc(47%);
  animation: 20s ease-in infinite rotate_circle;
}

.mouse_circle {
  background: radial-gradient(
      circle at center,
      rgba(140, 100, 255, 0.8) 0%,
      rgba(140, 100, 255, 0) 40%
    )
    no-repeat;
  top: -33%;
  left: -40%;
}
</style>
