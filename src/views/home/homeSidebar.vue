<template>
  <div>
    <el-menu :router="true" class="menu">
        <el-sub-menu :index="item.router" v-for="item of pdata.dataList">
            <template #title>
                <i class="iconfont icon-yingyong margin4"></i>
                {{ item.title }}
            </template>
            <el-menu-item :index="e.router" v-for="e of item.options">
                {{ e.title }}
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup lang='ts'>
    import {reactive} from "vue";

    let pdata = reactive({
        dataList:[
            {
                title: 'lingo3D',
                router: "/lingo3D",
                options: [
                    {
                        title: 'lingo3D',
                        router: '/lingo3D',
                    },
                    {
                        title: 'lingo3D',
                        router: '/lingo3D',
                    }
                ]
            },
            {
                title: 'webgpu',
                router: "/webgpu",
                options: [
                    {
                        title: 'webgpu',
                        router: '/webgpu',
                    },
                    {
                        title: 'webgpu',
                        router: '/webgpu',
                    }
                ]
            },
            {
                title: 'webgl',
                router: "/webgl",
                options: [
                    {
                        title: 'webgl',
                        router: '/webgl',
                    },
                    {
                        title: 'webgl',
                        router: '/webgl2',
                    }
                ]
            },
            {
                title: 'UI',
                router: "/pmaoUI",
                options: [
                    {
                        title: 'pmaoUI',
                        router: '/pmaoUI',
                    },
                ]
            },
        ]
    })
</script>
<style scoped>
</style>
