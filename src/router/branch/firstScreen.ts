const firstScreen = [
    {
        path: '/firstScreen',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/frontPage.vue'),
        name: 'firstScreen',
        redirect: '/game/sl',
        children: [
            {
                path: '/firstScreen/home',
                name: 'firstScreen.home',
                component: () =>
                    import(/* webpackChunkName: "about" */ '../views/home/frontPage.vue'),
            },
            {
                path: '/firstScreen/square',
                name: 'firstScreen.square',
                component: () => import('@/pages/game/multiplayerOnline/index.vue'),
            },
        ],
        meta: { hidden: false, title: 'firstScreen' },
    },
];

export default firstScreen;
