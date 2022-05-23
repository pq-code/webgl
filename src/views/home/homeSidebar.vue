<template>
  <div>
    <el-menu :router="true" :default-active="menuActive" class="menu">
      <el-sub-menu index="/webgpu">
        <template #title>
          <i class="iconfont icon-yingyong margin4"></i>
          webgpu
        </template>
        <el-menu-item index="/webgpu">
          webgpu
        </el-menu-item>
        <el-menu-item index="/webgpu">
          webgpu
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="/webgl">
        <template #title>
          <i class="iconfont icon-yingyong margin4"></i>
          webgl
        </template>
        <el-menu-item index="/webgl">
          webgl
        </el-menu-item>
        <el-menu-item index="/webg2">
          webg2
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/three">
        <template #title>
          <i class="iconfont icon-yingyong margin4"></i>
          three
        </template>
        <el-menu-item index="/three1">
          three1
        </el-menu-item>
        <el-menu-item index="/three2">
          three2
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup lang='ts'>

</script>
<style scoped>
</style>
