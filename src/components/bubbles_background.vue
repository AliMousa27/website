<template>
  <div class="gradient-bg">
    <!-- Existing SVG for goo filter -->
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

    <!-- Gradients Container -->
    <div class="gradients-container">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
      <div class="circle5"></div>
      <div class="gap_circle"></div>
      <div class="mouse_circle" id="mouse_circle"></div>
    </div>
    <div class="curve">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 1422 800"
      >
        <defs>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="oooscillate-grad"
          >
            <stop
              stop-color="hsl(206, 75%, 49%)"
              stop-opacity="1"
              offset="0%"
            ></stop>
            <stop
              stop-color="hsl(331, 90%, 56%)"
              stop-opacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>

        <g
          stroke-width="2"
          stroke="url(#oooscillate-grad)"
          fill="none"
          stroke-linecap="round"
        >
          <path
            d="M 0 572 Q 355.5 185 711 400 Q 1066.5 615 1422 572"
            opacity="0.86"
          ></path>

          <path
            d="M 0 550 Q 355.5 185 711 400 Q 1066.5 615 1422 550"
            opacity="0.43"
          ></path>
          <path
            d="M 0 528 Q 355.5 185 711 400 Q 1066.5 615 1422 528"
            opacity="0.28"
          ></path>
          <path
            d="M 0 506 Q 355.5 185 711 400 Q 1066.5 615 1422 506"
            opacity="0.11"
          ></path>
          <path
            d="M 0 484 Q 355.5 185 711 400 Q 1066.5 615 1422 484"
            opacity="0.36"
          ></path>
          <path
            d="M 0 462 Q 355.5 185 711 400 Q 1066.5 615 1422 462"
            opacity="0.55"
          ></path>
          <path
            d="M 0 440 Q 355.5 185 711 400 Q 1066.5 615 1422 440"
            opacity="0.12"
          ></path>
          <path
            d="M 0 418 Q 355.5 185 711 400 Q 1066.5 615 1422 418"
            opacity="0.45"
          ></path>
          <path
            d="M 0 396 Q 355.5 185 711 400 Q 1066.5 615 1422 396"
            opacity="0.81"
          ></path>
          <path
            d="M 0 374 Q 355.5 185 711 400 Q 1066.5 615 1422 374"
            opacity="0.42"
          ></path>
          <path
            d="M 0 352 Q 355.5 185 711 400 Q 1066.5 615 1422 352"
            opacity="0.46"
          ></path>
          <path
            d="M 0 330 Q 355.5 185 711 400 Q 1066.5 615 1422 330"
            opacity="0.79"
          ></path>
          <path
            d="M 0 308 Q 355.5 185 711 400 Q 1066.5 615 1422 308"
            opacity="0.12"
          ></path>
          <path
            d="M 0 286 Q 355.5 185 711 400 Q 1066.5 615 1422 286"
            opacity="0.70"
          ></path>
          <path
            d="M 0 264 Q 355.5 185 711 400 Q 1066.5 615 1422 264"
            opacity="0.23"
          ></path>
          <path
            d="M 0 242 Q 355.5 185 711 400 Q 1066.5 615 1422 242"
            opacity="0.97"
          ></path>
          <path
            d="M 0 220 Q 355.5 185 711 400 Q 1066.5 615 1422 220"
            opacity="0.10"
          ></path>
          <path
            d="M 0 198 Q 355.5 185 711 400 Q 1066.5 615 1422 198"
            opacity="0.40"
          ></path>
          <path
            d="M 0 176 Q 355.5 185 711 400 Q 1066.5 615 1422 176"
            opacity="0.37"
          ></path>
          <path
            d="M 0 154 Q 355.5 185 711 400 Q 1066.5 615 1422 154"
            opacity="0.47"
          ></path>
          <path
            d="M 0 132 Q 355.5 185 711 400 Q 1066.5 615 1422 132"
            opacity="0.39"
          ></path>
          <path
            d="M 0 110 Q 355.5 185 711 400 Q 1066.5 615 1422 110"
            opacity="0.28"
          ></path>
          <path
            d="M 0 88 Q 355.5 185 711 400 Q 1066.5 615 1422 88"
            opacity="0.87"
          ></path>
          <path
            d="M 0 66 Q 355.5 185 711 400 Q 1066.5 615 1422 66"
            opacity="0.95"
          ></path>
          <path
            d="M 0 44 Q 355.5 185 711 400 Q 1066.5 615 1422 44"
            opacity="0.28"
          ></path>
        </g>
      </svg>
    </div>
    <div id="projects_container">
      <ul>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ul>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./project_card.vue";
export default {
  name: "BubbelsPage",
  components: {
    ProjectCard,
  },
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
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: black;
  top: 0;
  left: 0;
}

.gradients-container {
  margin-bottom: 300px;
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
  animation: 20s ease infinite rotate_circle;
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
  top: -40%;
  left: -40%;
}
.curve {
  scale: scale(0.6);
  transform: translateY(-37%);
  position: relative;
  width: 100%;
}
#projects_container {
  transform: translateY(-40%);
  height: fit-content;
  width: 100vw;
  z-index: -1;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100vh;
  align-content: center;
}

ul {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 300px;
  width: 100%;
}
</style>
