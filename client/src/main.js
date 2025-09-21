import { createApp } from 'vue/dist/vue.esm-bundler.js'
//importing styles sheets
import './style.css'
//importing App component
import App from './App.vue'
//importing router
import {router} from "./router/index.js";
//importing createPinia in order to use our pinia stores
import {createPinia} from "pinia";
//importing our internationalization object
import {i18n} from "./i18n/index.js";
//importing vueapexcharts in order to use our charts
import VueApexCharts from "vue3-apexcharts";
//creating pinia object
const pinia = createPinia();

//initializing vue app
createApp(App).use(i18n).use(router).use(pinia).use(VueApexCharts).mount('#app');