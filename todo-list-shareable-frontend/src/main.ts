import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './index.css'
import axios from "axios";
import VueAxios from 'vue-axios';
import { createPinia } from "pinia";

createApp(App).use(VueAxios, axios).use(createPinia()).use(store).use(router).mount("#app");
