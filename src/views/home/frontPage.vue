<template>
  <div class="frontPage">
    <div class="frontPageTile" @click="frontPage">
      这是一个首页
    </div>
    <threeHome/>
  </div>
</template>

<script setup lang="ts">

    import { useRouter } from 'vue-router';
    import threeHome from './threeHome/index.vue';


    const router = useRouter()

    const frontPage = function () {
        router.push({
          path: '/home',
        })
    }






</script>

<style lang="less" scoped>
    .frontPage {
        width: 100%;
        height: 100vh;
        //background-size: 1em 1em;
        //background-image: linear-gradient(to bottom right, #ff7206, #ff4120);
        .frontPageTile {
            background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 200px;
            font-weight: 900;
            z-index: 1000;
            position: absolute;
            top: 20%;
            left: 60%;
            cursor: pointer;
        }
    }
</style>
