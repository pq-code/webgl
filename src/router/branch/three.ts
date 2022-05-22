const three = [
  {
    path: "/three",
    component: () => import(/* webpackChunkName: "about" */ "../../views/three/index.vue"),
    name: "three",
    // leaf: true,//只有一个节点
    children: [
      {
        path: "/three1",
        component: () => import(/* webpackChunkName: "about" */ "../../views/three/three1.vue"),
      },
      {
        path: "/three2",
        component: () => import(/* webpackChunkName: "about" */ "../../views/three/three2.vue"),
      },
    ],
    meta: { hidden: false, title: "webgl" },
  },
]

export default three;
