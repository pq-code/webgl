<template>
    <div id="uuid"></div>
</template>

<script setup>
import AMapLoader from '@amap/amap-jsapi-loader';

let map, Amap;

const initMap = () => {
    AMapLoader.load({
        key: 'c0ce6e51be7728294298d79231ef7628',
        version: '2.0',
        plugin: props.plugins,
    }).then(AMap => {
        map = new AMap.Map('mapdemo', {
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
.visualLargeScreen {
    // width: 100vh;
    // height: 100vh;
    .visualLargeScreenChart {
        width: 100%;
        height: 100vh;
        z-index: 1000;
        // position: absolute;
        // background-color: rgb(255, 85, 85);
        .visualLargeScreenTitle {
            width: 100%;
            height: 60px;
            font-size: 40px;
            color: white;
            font-weight: 900;
            display: flex;
            justify-content: center;
            align-items: center;

            // background-color: rgb(137, 172, 255);
        }
        // 数据
        .visualLargeScreen-data {
            display: flex;
            height: calc(100vh - 60px);
            opacity: 0.2;
            // position: absolute;
            .visualLargeScreen-data-left {
                width: 25%;
                background-color: rgb(255, 85, 85);

                .data-left-dataOne {
                    background-color: aqua;
                    height: 35%;
                    .data-left-titleOne {
                        font-size: 20px;
                        color: #fff;
                    }
                }
                .data-left-dataTwo {
                    background-color: aqua;
                    height: 30%;
                    .data-left-titleOne {
                        font-size: 20px;
                        color: #fff;
                    }
                }
                .data-left-dataThree {
                    background-color: aqua;
                    height: 35%;
                    .data-left-titleOne {
                        font-size: 20px;
                        color: #fff;
                    }
                }
            }
            .visualLargeScreen-data-middle {
                width: 50%;
                .visualLargeScreen-data-middle-3d {
                }
                // background-color: rgb(137, 172, 255);
            }
            .visualLargeScreen-data-right {
                width: 25%;
                // background-color: rgb(253, 255, 137);
                .data-right-dataOne {
                    background-color: aqua;
                    height: 35%;
                    .data-right-titleOne {
                        font-size: 20px;
                        color: #fff;
                    }
                }
                .data-right-dataTwo {
                    background-color: aqua;
                    height: 30%;
                    .data-right-titleOne {
                        font-size: 20px;
                        color: #fff;
                    }
                }
                .data-right-dataThree {
                    background-color: aqua;
                    height: 35%;
                    .data-right-titleOne {
                        font-size: 20px;
                        color: #fff;
                    }
                }
            }
        }
        // 视图
        .visualLargeScreen-view {
        }
    }
}
</style>
