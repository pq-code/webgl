import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
    {
        path: "/",
        component: () => import(/* webpackChunkName: "about" */ "../views/home/home.vue"),
        name: "home",
        // leaf: true,//只有一个节点
        children: [
            {
                path: "/home",
                redirect: '/',
                component: () => import(/* webpackChunkName: "about" */ "../views/home/home.vue"),
            }, //默认首页
            {
                path: "/webgl",
                component: () => import(/* webpackChunkName: "about" */ "../views/webgl/index.vue"),
            },
            // {
            //     path: "/three2",
            //     component: () => import(/* webpackChunkName: "about" */ "../views/three/three2.vue"),
            // },
        ],
        meta: { hidden: false, title: "首页" },
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
