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
  {
    path: "/trajectoryMotion",
    component: () => import(/* webpackChunkName: "about" */ "../../views/webgl/trajectoryMotion/index.vue"),
    name: "trajectoryMotion",
    // leaf: true,//只有一个节点
    meta: { hidden: false, title: "trajectoryMotion" },
  },
  {
    path: "/heartOfSteel",
    component: () => import(/* webpackChunkName: "about" */ "../../views/webgl/heartOfSteel/index.vue"),
    name: "heartOfSteel",
    // leaf: true,//只有一个节点
    meta: { hidden: false, title: "heartOfSteel" },
  },
]
export default webgl;
