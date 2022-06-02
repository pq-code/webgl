<template>
  <div class="frontPage" @click="frontPage">
    这是一个首页
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

<style scoped>
  .frontPage {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom right, #ffffff, #b4b4b4);
  }
</style>