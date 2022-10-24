<template>
    <div class="main">
        <header class="header">
            <button>初级</button>
            <button>中级</button>
            <button>高级</button>
        </header>
        <div class="gameBox" id="gameBox"></div>
        <footer class="footer">
            剩余雷数量：
            <span id="surplusMine"></span>
        </footer>
    </div>
</template>
<script setup lang="ts">
import { px } from 'style-value-types';
import { onMounted } from 'vue';

//快速生成一个16*16的二维数组
let buttonArr = Array(16)
    .fill('')
    .map(() => Array(16).fill({}));
//渲染游戏区域函数
const renderDiv = () => {
    // document.getElementById('gameBox').innerHTML = '';
    document.querySelector('div').innerHTML = '';
    buttonArr.forEach((item, index) => {
        let ul = document.createElement('ul');
        //给ul标签添加自定义属性y
        ul.dataset.y = index;
        item.forEach((item2, index2) => {
            let button = document.createElement('button'); //遍历数组，绘制棋盘
            //给button标签添加自定义属性x，用来作为坐标使用
            button.dataset.x = index2;
            if (item2.num === 10) {
                //给地雷元素添加一个自定义属性，便于识别
                button.dataset.z = 10;
                //写的时候可以把地雷先渲染出来，写完了再注释掉
                // button.classList.add('active')
            } else {
                item2.num = 0;
            }
            ul.appendChild(button);
        });
        document.querySelector('div').appendChild(ul);
    });
};

onMounted(() => {
    renderDiv();
});
</script>
<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
div {
    width: 500px;
    margin: 50px auto;
    padding: 5px;
    border: 5px solid black;
}
ul {
    display: flex;
    height: 30px;
}
button {
    width: 30px;
    height: 30px;
    background-color: #c0c0c0;
}
.bgc1 {
    background-color: white;
}
.bgc2 {
    background-color: black;
}
.bgc3 {
    background: url(./pngsucai_1307487_8c9867.png) no-repeat;
    background-color: #c0c0c0;
    background-size: 100%;
}
.active {
    background: url(./Snipaste_2022-06-12_16-24-48.jpg) no-repeat;
    background-size: 100%;
}
p {
    position: absolute;
    top: 200px;
    right: 200px;
    font-size: 20px;
}
</style>
