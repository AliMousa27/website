<template>
  <div class="text_container">
    <h1 class="static_header">
      I'm Ali, a&nbsp;
      <VueTyped
        class="typer_writer"
        :strings="['software engineer', 'developer', 'math enthusiast']"
        :typeSpeed="100"
        :backSpeed="100"
        :backDelay="1000"
        :loop="true"
      ></VueTyped>
    </h1>
    <h2 class="paragraph" id="about_paragraph">
      This is some text fdadf afaf af a faf a faf
    </h2>
  </div>
  <div class="gradient-bg">
    <!--https://medium.com/@parth_jansari/the-infamous-goo-filter-9caceb44ebb5-->
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
    </div>
  </div>
</template>

<script>
export default {
  name: "BubbelsPage",
  mounted() {
    this.fade_text_word_by_word();
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
      target_x += (mouse_x - target_x) / 50;
      target_y += (mouse_y - target_y) / 50;
      if (circle) {
        circle.style.transform = `translate(${target_x}px, ${target_y}px)`;
      }
      requestAnimationFrame(move_circle);
    }
    move_circle();
  },
  methods: {
    fade_text_word_by_word() {
      const paragraph = document.getElementById("about_paragraph");
      const words = paragraph.innerText.split(" ");
      paragraph.innerText = "";

      words.forEach((word, index) => {
        const wordSpan = document.createElement("span");
        wordSpan.innerText = word + " "; // Add a space after each word for readability
        //initally blur and hide the word
        wordSpan.style.opacity = 0;
        wordSpan.style.filter = "blur(4px)";
        // Apply the animation with a delay based on the word's position given by the index
        wordSpan.style.animation = `fade-in 0.8s ${
          0.1 * (index + 1)
        }s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
        paragraph.appendChild(wordSpan);
      });
    },
  },
};
</script>

<style>
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
  overflow: hidden;
  background: linear-gradient(40deg, rgb(108, 0, 162), rgb(0, 17, 82));
  top: 0;
  left: 0;
}
svg {
  display: none;
}
.gradients-container {
  width: 100%;
  height: 100%;
  filter: url(#goo) blur(40px);
}

.circle1 {
  width: 80%;
  height: 80%;

  background: radial-gradient(
      circle at center,
      rgba(18, 113, 255, 0.8) 0%,
      rgba(18, 113, 255, 0) 40%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  position: absolute;
  opacity: 1;
  top: calc(50% - 80% / 2);
  left: calc(50% - 80% / 2);
  transform-origin: center center;
  animation: 30s linear infinite move_circle_horizontal reverse;
}

.circle2 {
  width: 80%;
  height: 80%;

  background: radial-gradient(
      circle at center,
      rgba(221, 74, 255, 0.8) 0%,
      rgba(221, 74, 255, 0) 50%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  position: absolute;
  opacity: 1;
  top: calc(50% - 80% / 2 - 100px);
  left: calc(50% - 80% / 2 - 300px);
  transform-origin: center center;
  animation: 25s linear infinite move_circle_vertical;
}
.circle3 {
  width: calc(80%);
  height: calc(80%);

  background: radial-gradient(
      circle at center,
      rgba(100, 220, 255, 0.8) 0%,
      rgba(100, 220, 255, 0) 40%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  position: absolute;
  opacity: 1;
  top: calc(50% - 80% / 2);
  left: calc(50% - 80% / 2 + 200px);
  transform-origin: calc(50% - 400px);
  animation: 20s linear infinite rotate_circle;
}

.circle4 {
  width: 80%;
  height: 80%;

  background: radial-gradient(
      circle at center,
      rgba(200, 50, 50, 0.8) 0%,
      rgba(200, 50, 50, 0) 40%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  position: absolute;
  opacity: 1;
  top: calc(50% - 80% / 2 + 100px);
  left: calc(50% - 80% / 2 + 500px);
  transform-origin: calc(50% + 400px);
  animation: 20s ease infinite rotate_circle;
}

.circle5 {
  width: 80%;
  height: 80%;

  background: radial-gradient(
      circle at center,
      rgba(180, 180, 50, 0.8) 0%,
      rgba(180, 180, 50, 0) 40%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  position: absolute;
  opacity: 1;
  top: calc(50% - 80% / 2 - 150px);
  left: calc(50% - 80% / 2 + 400px);
  transform-origin: calc(50% - 800px) calc(50% + 200px);
  animation: 20s ease-in infinite rotate_circle;
}

.mouse_circle {
  width: 80%;
  height: 80%;

  background: radial-gradient(
      circle at center,
      rgba(140, 100, 255, 0.8) 0%,
      rgba(140, 100, 255, 0) 40%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  position: absolute;
  opacity: 1;
  top: -40%;
  left: -40%;
}

.text_container {
  z-index: 1;

  position: absolute;
  color: white;

  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.static_header {
  display: flex;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 40px;
}

.typer_writer {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 40px;
}

.paragraph {
  position: relative;
  top: 100px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 30px;
  width: 120%;
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>
