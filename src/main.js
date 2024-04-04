import { createApp } from 'vue/dist/vue.esm-bundler.js'
import './style.css'
import App from './App.vue'
import {router} from "./router/index.js";
import {createPinia} from "pinia";
import {i18n} from "./i18n/index.js";
import VueApexCharts from "vue3-apexcharts";
const pinia = createPinia();

createApp(App).use(i18n).use(router).use(pinia).use(VueApexCharts).mount('#app');