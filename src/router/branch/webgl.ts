const webgl = [
  {
    path: "/webgl",
    component: () => import(/* webpackChunkName: "about" */ "../../views/webgl/index.vue"),
    name: "webgl",
    // leaf: true,//只有一个节点
    children: [
      {
        path: "/webgl",
        component: () => import(/* webpackChunkName: "about" */ "../../views/webgl/index.vue"),
      },
    ],
    meta: { hidden: false, title: "webgl" },
  },
]
export default webgl;
