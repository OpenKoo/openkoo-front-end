import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/layout";

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        component: layout,
        redirect: '/',
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/list.vue'),
            },
            {
                path: '/detail',
                name: 'detail',
                component: () => import('../views/detail.vue'),
            },


        ]
    }
]
const router = new VueRouter({
    routes
})

export default router
