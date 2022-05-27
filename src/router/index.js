import { createRouter, createWebHashHistory } from "vue-router"
import lingo3D from "./branch/lingo3D";
import webgpu from "./branch/webgpu";
import webgl from "./branch/webgl";
import three from "./branch/three";

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
            ...lingo3D,
            ...webgpu,
            ...webgl,
            ...three,
        ],
        meta: { hidden: false, title: "首页" },
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
