<template>
    <div class="sl-center">
        <div class="sl-main">
            <div class="sl-game">
                <div class="sl-game-background">
                    <gameFile></gameFile>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import gameFile from './gameFile/index.vue';
</script>
<style scoped lang="less">
.sl-center {
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    padding: 10px;
    .sl-main {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: rgb(222, 233, 234);
        text-align: center;
        // position: relative;
        .sl-game {
            display: inline-block;
            width: calc(100% - 360px);
            height: calc(100% - 360px);
            padding: 80px;
            margin: 100px auto;
            background-color: aquamarine;
            overflow: hidden;
            .sl-game-background {
                width: 360px;
                height: 500px;
                border-radius: 6px;
                background-color: #fff;
            }
        }
    }
}
</style>
