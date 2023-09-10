import { createApp } from "vue";
import store from "./store";

import App from "./App.vue";

// import icons core
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

// add animation
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

createApp(App)
    .use(store)
    .use(autoAnimatePlugin)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
