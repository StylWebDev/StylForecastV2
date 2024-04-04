import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Forecast from "../views/Forecast/Forecast.vue";
import Daily from "../views/Forecast/Daily.vue";
import Not_Found from "../views/Not_Found.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Weekly from "../views/Forecast/Weekly.vue";

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
        path: '/weather/:city',
        name: 'dailyForecast',
        component: Forecast,
        props: true,
        children: [
            {
            path: "",
            name: "city",
            component: Weekly,
            },
            {
                path: ":days([0-4])",
                name: "details",
                component: Daily,
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
      path: "/info",
      redirect: '/about'
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/report',
      redirect: '/contact'
    },
    {
        path: '/:catchAll(.*)*',
        name: 'notFound',
        component: Not_Found
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'nav-colors'
})

export {router}