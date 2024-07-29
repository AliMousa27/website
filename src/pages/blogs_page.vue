<template>
  <NavBar />
  <div class="container-fluid blogs_container">
    <ul>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </ul>
  </div>
  <BubblesBackground />
  <PageFooter />
</template>

<script>
import BlogCard from "../components/blogs_components/blog_card.vue";
import BubblesBackground from "../components/intro_page_components/bubbles_background.vue";
import NavBar from "../components/shared_components/navbar.vue";
import PageFooter from "../components/shared_components/footer.vue";

export default {
  name: "BlogsPage",
  components: {
    BlogCard,
    BubblesBackground,
    NavBar,
    PageFooter,
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.blogs_container {
  height: 100vh;
  overflow: scroll;
}
</style>
