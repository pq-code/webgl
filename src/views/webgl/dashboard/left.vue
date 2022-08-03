<template>
    <div id="leftdataOne" class="data-left-dataOne" draggable="true">
        <div class="data-left-titleOne">左数据一</div>
        <div id="leftDataOne" class="leftDataOne"></div>
    </div>

    <div id="leftdataTwo" class="data-left-dataTwo" draggable="true">
        <div class="data-left-titleTwo">左数据二</div>
        <div id="leftDataTwo" class="leftDataTwo"></div>
    </div>

    <div id="leftdataThree" class="data-left-dataThree" draggable="true">
        <div class="data-left-titleThree">左数据三</div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

import { leftDataOne } from './data/leftOne.ts';
import { leftDataTwo } from './data/leftTwo.ts';

onMounted(() => {
    leftDataOne();
    leftDataTwo();
});

// const chart = new G2.Chart({
//     /* your options */
// });
</script>
<style lang="less" scoped>
@left-title-size: 3vh;
.data-left-dataOne {
    background-color: aqua;
    height: 31vh;
    .data-left-titleOne {
        font-size: @left-title-size;
        color: #fff;
    }
}
.data-left-dataTwo {
    background-color: aqua;
    height: 31vh;
    .data-left-titleTwo {
        font-size: @left-title-size;
        color: #fff;
    }
}
.data-left-dataThree {
    background-color: aqua;
    height: 31vh;
    .data-left-titleThree {
        font-size: @left-title-size;
        color: #fff;
    }
}
</style>
