import { createApp } from "vue";
import App from "./App.vue";
import VueTyped from "vue3-typed-js";
// Import Bootstrap CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
const app = createApp(App);
app.use(VueTyped);

app.mount("#app");
