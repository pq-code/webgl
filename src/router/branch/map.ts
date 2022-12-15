const map = [
    {
        path: '/map',
        component: () => import('@/views/map/index.vue'),
        name: 'map',
        redirect: '/map/gaodeMap',
        children: [
            {
                path: '/map/gaodeMap',
                component: () => import('@/views/map/gaodeMap/index.vue'),
            },
            {
                path: '/map/visualLargeScreen',
                component: () => import('@/views/map/visualLargeScreen/index.vue'),
            },
        ],
        meta: { hidden: false, title: 'map' },
    },
];

export default map;
