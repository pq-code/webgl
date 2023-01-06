const lingo3D = [
    {
        path: '/lingo3D',
        component: () => import('@/pages/lingo3D/index.vue'),
        name: 'lingo3D',
        redirect: '/lingo3D/home',
        children: [
            {
                path: '/lingo3D/home',
                component: () => import('@/pages/lingo3D/index.vue'),
            },
            {
                path: '/lingo3D/lingo3D2',
                component: () => import('@/pages/lingo3D/index2.vue'),
            },
        ],
        meta: { hidden: false, title: 'webgl' },
    },
];

export default lingo3D;
