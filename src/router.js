import { createMemoryHistory, createRouter } from "vue-router";
import BubblesPage from "./pages/bubbles_page.vue";
import AboutMePage from "./pages/about_me.vue";
import BlogsPage from "./pages/blogs_page.vue";
const routes = [
  { path: "/", component: BubblesPage },
  { path: "/about", component: AboutMePage },
  { path: "/blogs", component: BlogsPage },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
