//importing functions in order to create router
import {createRouter, createWebHistory} from "vue-router";

//initializing router paths
const routes = [

    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
        path: '/weather/:city',
        name: 'dailyForecast',
        component: () => import('../views/Forecast/Forecast.vue'),
        props: true,
        children: [
            {
            path: "",
            name: "city",
                component: () => import('../views/Forecast/Weekly.vue'),
            },
            {
                path: ":days([0-4])",
                name: "details",
                component: () => import('../views/Forecast/Daily.vue'),
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
      path: "/info",
      redirect: '/about'
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/report',
      redirect: '/contact'
    },
    {
        path: '/:catchAll(.*)*',
        name: 'notFound',
        component: () => import('../views/Not_Found.vue'),
    }
]

//create router
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'nav-colors'
})

//exporting router
export {router}