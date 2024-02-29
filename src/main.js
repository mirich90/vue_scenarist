import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import Toast from "vue-toastification";

import "./scss/style.scss";
import "./js/main.js";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(router).use(Toast);
router.isReady().then(() => {
  app.mount("#app");
});
