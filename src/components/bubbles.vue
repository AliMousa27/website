<template>
  <div class="background"></div>
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
}
</style>
