<template>
  <ul>
    <BlogCard />
    <BlogCard />
    <BlogCard />
  </ul>
</template>

<script>
import BlogCard from "../components/blogs_components/blog_card.vue";

export default {
  name: "BlogsPage",
  components: {
    BlogCard,
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}
</style>
