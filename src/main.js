import { createApp, h } from "vue";
import App from "./App.vue";
import VueTyped from "vue3-typed-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";
const app = createApp({
  render: () => h(App),
});
app.use(VueTyped);
app.use(router);
app.mount("#app");
