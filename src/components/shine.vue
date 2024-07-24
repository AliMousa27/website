<template>
  <h1 class="shine" ref="shineText">{{ project_title }}</h1>
</template>

<script>
export default {
  name: "ShineText",
  props: {
    project_title: String,
    some_boolean: Boolean,
  },
  mounted() {
    const shineText = this.$refs.shineText;

    if (this.some_boolean) {
      shineText.style.opacity = "0";
      shineText.style.fontFamily = "Roboto, sans-serif";
      shineText.style.fontWeight = "900";
      shineText.style.fontSize = "30px";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          shineText.style.animation =
            "shine_text 2s infinite linear, increase_opacity 1s 1s forwards";
        });
      });
    } else {
      shineText.style.opacity = "1";
    }
  },
};
</script>

<style>
.shine {
  background: #ffffff
    linear-gradient(to right, #ffffff, #ffffff 50%, rgb(0, 0, 0) 100%) 0 0
    no-repeat;
  background-size: 150px;
  color: rgba(255, 255, 255, 0.3);
  background-clip: text;
  animation: shine_text 2s infinite linear;
  text-shadow: 0 0px 0px rgba(255, 255, 255, 0.5);
  font-size: 45px;
  font-weight: 700;
  opacity: 0;
}

@keyframes increase_opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes shine_text {
  0% {
    background-position: -100%;
  }
  100% {
    background-position: 110%;
  }
}

@media (max-width: 768px) {
  .shine {
    font-size: 35px;
  }
}
</style>
