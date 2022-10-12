const game = [
    {
      path: "/game",
      component: () => import(/* webpackChunkName: "about" */ "../../views/game/sl/index.vue"),
      name: "game",
      // leaf: true,//只有一个节点
      children: [
        {
          path: "/sl",
          component: () => import(/* webpackChunkName: "about" */ "../../views/game/sl/index.vue"),
        },
      ],
      meta: { hidden: false, title: "game" },
    },
  ]

  export default game;
