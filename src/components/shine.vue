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
.shine {
  background: #ffffff
    linear-gradient(to right, #ffffff, #ffffff 50%, rgb(0, 0, 0) 100%) 0 0
    no-repeat;
  background-size: 150px;
  color: rgba(255, 255, 255, 0.3);
  background-clip: text;
  animation: shine 5s infinite linear;
  text-shadow: 0 0px 0px rgba(255, 255, 255, 0.5);
  font-size: 45px;
  font-weight: 700;
}

@keyframes shine {
  0% {
    background-position: -1000px;
  }
  100% {
    background-position: 1000px;
  }
}

@media (max-width: 768px) {
  .shine {
    font-size: 35px;
  }
}
</style>
