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
    import {navigation} from "@/views/home/navigation";

    let pdata = reactive({
        dataList: navigation
    })
</script>
<style scoped>
</style>
