<template>
  <ul>
    <BlogCard />
  </ul>
  <BubblesBackground />
  <PageFooter />
</template>

<script>
import BlogCard from "../components/blogs_components/blog_card.vue";
import BubblesBackground from "../components/intro_page_components/bubbles_background.vue";
import PageFooter from "../components/shared_components/footer.vue";

export default {
  name: "BlogsPage",
  components: {
    BlogCard,
    BubblesBackground,

    PageFooter,
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  gap: 30px;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
