import App from "./App.vue";
import { createApp } from "vue";
import "./assets/fonts/fonts.css";

// Plugins
import { registerPlugins } from "@/plugins";

// Import Vuetify CSS
import "vuetify/dist/vuetify.min.css";

import { createVuetify } from "vuetify";
const vuetify = createVuetify();
const app = createApp(App);

registerPlugins(app);

app.use(vuetify);
app.mount("#app");
