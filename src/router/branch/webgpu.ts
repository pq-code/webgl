const webgpu = [
    {
        path: '/webgpu',
        component: () => import(/* webpackChunkName: "about" */ '../../views/webgpu/index.vue'),
        name: 'webgpu',
        children: [
            {
                path: '/webgpu',
                component: () =>
                    import(/* webpackChunkName: "about" */ '../../views/webgpu/index.vue'),
            },
        ],
        meta: { hidden: false, title: 'webgpu' },
    },
];
export default webgpu;
