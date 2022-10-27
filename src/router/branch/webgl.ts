const webgl = [
    {
        path: '/dashboard/webgl',
        component: () => import(/* webpackChunkName: "about" */ '../../views/webgl/index.vue'),
        name: 'dashboard.webgl',
        redirect: '/webgl/trajectoryMotion',
        // leaf: true,//只有一个节点
        children: [
            {
                path: '/webgl/panoramiciewing',
                component: () => import('@/views/webgl/panoramiciewing/index.vue'),
                name: 'webgl.panoramiciewing',
            },
            {
                path: '/webgl/trajectoryMotion',
                component: () => import('@/views/webgl/trajectoryMotion/index.vue'),
                name: 'webgl.trajectoryMotion',
            },
            {
                path: '/webgl/heartOfSteel',
                component: () => import('@/views/webgl/heartOfSteel/index.vue'),
                name: 'webgl.heartOfSteel',
            },
            {
                path: '/webgl/forzaHorizonScenes',
                component: () => import('@/views/webgl/forzaHorizonScenes/index.vue'),
                name: 'webgl.forzaHorizonScenes',
            },
            {
                path: '/webgl/visualLargeScreen',
                component: () => import('@/views/webgl/visualLargeScreen/index.vue'),
                name: 'webgl.forzaHorizonScenes',
            },
        ],
        meta: { hidden: false, title: 'webgl' },
    },
];
export default webgl;
