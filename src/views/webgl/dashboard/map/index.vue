<template>
    <div class="map-content" :id="uuid"></div>
</template>

<script setup>
import AMapLoader from '@amap/amap-jsapi-loader';
import { guid } from '@/utils/index';
const props = defineProps({
    zoom: {
        type: Number,
        default: 16,
    },
    mapStyle: {
        type: String,
        default: '',
    },
    center: {
        type: Array,
        default: [120.114195, 30.291225],
    },
    viewMode: {
        type: String,
        default: '3D',
    },
    isOnClick: {
        type: Boolean,
        default: false,
    },
    plugins: {
        type: Array,
        default: [],
    },
    parameters: {
        type: Object,
        default: {},
    },
});

let map, AMap;
let uuid = guid;

const initMap = () => {
    AMapLoader.load({
        key: 'f9f991f311b1b9e73e78b1c05af9c683',
        version: '2.0',
        plugin: props.plugins,
    }).then(amap => {
        AMap = amap;
        map = new AMap.Map(uuid, {
            resizeEnable: true, //是否监控地图容器尺寸变化
            zoom: props.zoom, // 级别
            mapStyle: props.mapStyle, // 设置颜色底层
            center: props.center, // 中心点坐标
            viewMode: props.viewMode, // 使用3D视图
            ...props.parameters, // 剩余参数
        });
    });
};
initMap();
</script>

<style lang="less" scoped>
.map-content {
    width: 100%;
    height: 100%;
}
</style>
