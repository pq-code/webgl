const webgpu = [
    {
        path: '/webgpu',
        component: () => import(/* webpackChunkName: "about" */ '../../views/webgpu/index.vue'),
        name: 'webgpu',
        // leaf: true,//只有一个节点
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
