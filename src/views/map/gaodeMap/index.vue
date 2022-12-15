<script setup lang='ts'>
import { ref } from 'vue';
import Map from './map/map.vue'

</script>
<template>
    <div class="map-center">
        <div class="map">
            <div class="map-tool"></div>
            <Map></Map>
        </div>
        <div class="mapData-Tabel">

        </div>
    </div>
</template>
<style scoped lang="less">
.map-center {
    display: flex;
    flex-direction: column;
    padding: 20px;

    .map {
        height: 600px;

        .map-tool {
            position: absolute;
            // z-index: auto; // auto是不会创建一个新的层叠上下文的,而z-index:0能够创建一个新的
            z-index: 1000;
            height: 300px;
            width: 36px;
            background-color: aquamarine;

        }
    }

    .mapData-Tabel {
        margin-top: 20px;
        height: 600px;
        background-color: aquamarine;
    }
}
</style>
