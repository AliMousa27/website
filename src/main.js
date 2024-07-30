import { createApp, h } from "vue";
import App from "./App.vue";
import VueTyped from "vue3-typed-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
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
const app = createApp({
  render: () => h(App),
});
app.use(VueTyped);
app.use(router);
app.mount("#app");
