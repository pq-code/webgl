<script setup lang='ts'>
import { onMounted, ref, useSlots, computed } from 'vue';
import pDropDownButtonVue from '../p-dropDown/p-dropDownButton.vue';

const props = defineProps({
    dataList: {
        type: Array,
        default() {
            return [
                {
                    icon: '',
                    label: '121'
                },
                {
                    icon: '',
                    label: '121'
                }
            ]
        }
    },
    lengthWidth: {
        type: Boolean,
        default() {
            return true
        }
    }
});

const foldSwitch = ref(false) // 鼠标是否在侧边栏上
const selectIndex = ref() // 选中的数据
const buttonRefList = {}
const oldSelect = ref()

const emits = defineEmits(['lengthWidthFn'])

// 判断slot是否有值
const useSlotsFn = (e: string) => {
    return !!useSlots()[e]
}
// 判断head是否有slot
const sideHeadLi = computed(() => {
    return useSlotsFn('sideHeadLi')
})
// 判断body是否有slot
const sideBodyLi = computed(() => {
    return useSlotsFn('sideBodyLi')
})
// 鼠标移出
const mouseleaveFn = () => {
    foldSwitch.value = false
}
// 鼠标移入
const mouseenterFn = () => {
    foldSwitch.value = true
}
// 点击折叠按钮
const lengthWidthFn = () => {
    return emits('lengthWidthFn', !props.lengthWidth)
}
// 下拉按钮
const dropDown = (index: number) => {
    if (oldSelect.value) {
        buttonRefList[oldSelect.value].uncheck()
        oldSelect.value = `${index}_button`
    } else {
        oldSelect.value = `${index}_button`
    }
}
// 动态ref
const buttonRef = (el: any, key: string) => {
    if (el) {
        buttonRefList[key] = el
    }
}

onMounted(() => {

})

</script>

<template>
    <div class="p-side"
         @mouseleave="mouseleaveFn"
         @mouseenter="mouseenterFn">
        <div class="side-ul">
            <div class="side-head-li"
                 v-if="sideHeadLi">
                <div v-if="!lengthWidth && foldSwitch"
                     @click="lengthWidthFn"
                     style="cursor: pointer;">
                    <i class="iconfont icon-hanbaocaidanzhedie"></i>
                </div>
                <slot v-else
                      name="sideHeadLi"></slot>
            </div>
            <template v-if="sideBodyLi">
                <slot name="sideBodyLi"></slot>
            </template>
            <div class="side-body-li"
                 v-else
                 v-for="(item, index) in dataList">
                <pDropDownButtonVue :ref="(el) => buttonRef(el, `${index}_button`)"
                                    :item="item"
                                    :key="`${index}_button`"
                                    :lengthWidth="lengthWidth"
                                    @dropDown="dropDown(index)"></pDropDownButtonVue>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
.p-side {
    height: 100%;

    .side-ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        .side-head-li {
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            width: 100%;
            height: 88px;

            .iconfont {
                font-size: 22px;
            }
        }

        .side-body-li {
            width: 100%;
        }
    }
}
</style>
