const game = [
    {
        path: '/game',
        component: () => import('@/views/game/index.vue'),
        name: 'game',
        redirect: '/game/sl',
        children: [
            {
                path: '/game/sl',
                name: 'game.sl',
                component: () => import('@/views/game/sl/index.vue'),
            },
            {
                path: '/game/multiplayerOnline',
                name: 'game.multiplayerOnline',
                component: () => import('@/views/game/multiplayerOnline/index.vue'),
            },
        ],
        meta: { hidden: false, title: 'game' },
    },
];

export default game;
