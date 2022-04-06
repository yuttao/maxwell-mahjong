import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.config.globalProperties.$tileWidth = 290
app.config.globalProperties.$tileHeight = 385

app.use(router);

app.mount("#app");
