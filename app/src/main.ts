import { createApp } from "vue";
import App from "./App.vue";
import "solana-wallets-vue/styles.css";
import "./style/index.css";

import router from "./routes";

// Day.js
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

createApp(App).use(router).mount("#app");
