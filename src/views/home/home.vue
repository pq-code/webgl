<template>
  <div class="homeContainer">
    <div class="homeHeard">
      <el-button @click="screen">全屏</el-button>
    </div> 
     <div class="hemeLeft">
       <homeSidebar/>
    </div>
    <div id="main" class="hemeMain">
      <!-- <el-page-header :icon="ArrowLeft" content="detail" style="margin:10px"/> -->
        <router-view/>
<!--      <el-main style="width:100%;height:100%">-->
<!--        <router-view/>-->
<!--      </el-main>-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia'
import { useStore } from '../../store/index'
import { ArrowLeft } from '@element-plus/icons-vue'
import homeSidebar from './homeSidebar.vue'
import screenfull from 'screenfull';

const mainStore = useStore()
const { count } = storeToRefs(mainStore);
console.log(count.value);

const screen = function () {
  if (screenfull.isEnabled) {
    const element:any = document.getElementById('main');
    screenfull.request(element);
  }
}

const goBack = () => {
  console.log('go back')
}

</script>

<style scoped >

  .honeContainer {
    width: 100vh;
    height: 100vh;
  }
  .homeHeard {
    height: var(--home-heard-height);
    width: 100%;
    background-color: #f0f0f3;
    z-index: 1002;
    position: fixed;
    background-color:#ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }
  .hemeLeft {
    width: var(--home-sidebar-white);
    height: calc(100% - var(--home-heard-height));
    position: fixed;
    top: var(--home-heard-height);
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1001;
    overflow: hidden;
    background-color:#ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    /* border-right: 1px solid #ffffff; */
  }
  .hemeMain {
    width: calc(100% - var(--home-sidebar-white));
    height: calc(100% - var(--home-heard-height));
    top: var(--home-heard-height);
    left: var(--home-sidebar-white);
    position: absolute;
  }
</style>
