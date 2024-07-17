import { createApp } from "vue";
import App from "./App.vue";
import VueTyped from "vue3-typed-js";

const app = createApp(App);
app.use(VueTyped);
app.mount("#app");
