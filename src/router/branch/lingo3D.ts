const lingo3D = [
  {
    path: "/lingo3D",
    component: () => import(/* webpackChunkName: "about" */ "../../views/lingo3D/index.vue"),
    name: "lingo3D",
    // leaf: true,//只有一个节点
    children: [
      {
        path: "/lingo3D",
        component: () => import(/* webpackChunkName: "about" */ "../../views/lingo3D/index.vue"),
      },
      // {
      //   path: "/three2",
      //   component: () => import(/* webpackChunkName: "about" */ "../../views/three/three2.vue"),
      // },
    ],
    meta: { hidden: false, title: "webgl" },
  },
]

export default lingo3D;
