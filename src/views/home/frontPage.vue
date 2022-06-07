<template>
  <div class="frontPage" @click="frontPage">
    <div class="frontPageTile">
      这是一个首页
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

    const frontPage = function () {
        router.push({
          path: '/home',
        })
        debugger;
    }
</script>

<style lang="less" scoped>
  .frontPage {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom right, #ff7206, #ff4120);
    .frontPageTile {
      color: rgba(208, 208, 208, 0.55);
      font-size: 40px;
      font-weight: 900;
    }
  }
</style>
