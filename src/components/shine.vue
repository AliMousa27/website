<template>
  <h1 class="shine">{{ project_title }}</h1>
</template>

<script>
export default {
  name: "ShineText",
  props: {
    project_title: String,
  },
};
</script>

<style scoped>
html {
  background-color: #333;
  text-align: center;
}

body {
  padding-top: 3em;
}

.shine {
  background: #ffffff
    linear-gradient(to right, #ffffff, #ffffff 50%, rgb(0, 0, 0) 100%) 0 0
    no-repeat;
  background-size: 150px;
  color: rgba(255, 255, 255, 0.3);
  background-clip: text;
  animation: shine 5s infinite linear;
  text-shadow: 0 0px 0px rgba(255, 255, 255, 0.5);
}

@keyframes shine {
  0% {
    background-position: -1000px;
  }
  100% {
    background-position: 1000px;
  }
}
</style>
