<template>
    <div class="onLine-center">
        <div class="onLine-main">
            <div class="onLine-game">
                <div class="onLine-game-left">
                    <div class="onLine-game-left-main">
                        <div class="onLine-game-left-main-view">
                            <p>{{ `${leftFrom.name} 连接成功 ${leftFrom.time}` }}</p>
                            <ul class="onLine-game-left-main-view-ul">
                                <li
                                    v-for="item of leftData"
                                    :key="item.time"
                                    class="onLine-game-left-main-view-li"
                                >
                                    <p
                                        :style="{
                                            'text-align': item.user_name == 'pq' ? 'right' : 'left',
                                        }"
                                    >
                                        {{ `${item.user_name}: ${item.text}` }}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="onLine-game-left-main-input">
                            <el-input
                                :rows="10"
                                v-model="leftFrom.textarea"
                                type="textarea"
                                @keyup.enter.native="leftSendOut()"
                                :autosize="{ minRows: 3, maxRows: 4 }"
                            />
                            <el-button type="primary" @click="leftSendOut">发送</el-button>
                        </div>
                    </div>
                </div>
                <div class="onLine-game-right">
                    <div class="onLine-game-right-main">
                        <div class="onLine-game-right-main-view">
                            <ul class="onLine-game-right-main-view-ul">
                                <p>{{ `${rightFrom.name}连接成功${rightFrom.time}` }}</p>
                                <li
                                    v-for="item of rightData"
                                    :key="item.time"
                                    class="onLine-game-right-main-view-li"
                                >
                                    <p
                                        :style="{
                                            'text-align':
                                                item.user_name == 'qqq1' ? 'right' : 'left',
                                        }"
                                    >
                                        {{ `${item.user_name}: ${item.text}` }}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="onLine-game-right-main-input">
                            <el-input
                                :rows="10"
                                v-model="rightFrom.textarea"
                                type="textarea"
                                @keyup.enter.native="rightSendOut()"
                                :autosize="{ minRows: 3, maxRows: 4 }"
                            />
                            <el-button type="primary" @click="rightSendOut">发送</el-button>
                        </div>
                    </div>
                </div>
                <div class="onLine-game-sidebar">
                    <p class="onlineNumber">当前在线人数:{{ onlineNumber }}</p>
                    <p
                        class="lsftState"
                        :style="{
                            'background-color':
                                lsftState == 1 ? 'rgb(6 255 8)' : 'rgb(255 116 116)',
                        }"
                    >
                        pq连接状态:{{ lsftState == 1 ? '在线' : '离线' }}
                    </p>
                    <p
                        class="rightState"
                        :style="{
                            'background-color':
                                rightState == 1 ? 'rgb(6 255 8)' : 'rgb(255 116 116)',
                        }"
                    >
                        qqq1连接状态:{{ rightState == 1 ? '在线' : '离线' }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
// import gameFile from './gameFile/index.vue';
import { right } from '@popperjs/core';
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue';
import { login } from '@/api/apis/user';
import { Result } from '@/api/types/types';

const leftFrom = ref({
    textarea: '',
    time: '',
    name: '',
});
const rightFrom = ref({
    textarea: '',
    time: '',
    name: '',
});

const leftData = reactive([]);
const rightData = reactive([]);

const lsftState = ref(0);
const rightState = ref(0);

const onlineNumber = ref(0);

const leftSendOut = () => {
    const sendOut = {
        objective: 'sendOut',
        user_name: 'pq',
        text: leftFrom.value.textarea,
    };
    leftData.push(sendOut);
    connect.send(JSON.stringify(sendOut));
    leftFrom.value.textarea = '';
};

const rightSendOut = () => {
    const sendOut = {
        objective: 'sendOut',
        user_name: 'qqq1',
        text: rightFrom.value.textarea,
    };
    rightData.push(sendOut);
    connect.send(JSON.stringify(sendOut));
    rightFrom.value.textarea = '';
};

login({
    user_name: 'qqq1',
    user_password: '123',
}).then<Result>(res => {
    if (res.code == 0) {
        ElMessage({
            message: `${res.result.user_name}登陆成功`,
            type: 'success',
        });
        const { user_name, user_id } = res.result;
        const param = {
            objective: 'login',
            user_name,
            user_id,
        };
        ws(JSON.stringify(param));
    } else {
        ElMessage.error(res.message);
    }
});

login({
    user_name: 'pq',
    user_password: '123',
}).then((res: any) => {
    if (res.code == 0) {
        ElMessage({
            message: `${res.result.user_name}登陆成功`,
            type: 'success',
        });
        const { user_name, user_id } = res.result;
        const param = {
            objective: 'login',
            user_name,
            user_id,
        };
        ws(JSON.stringify(param));
    } else {
        ElMessage.error(res.message);
    }
});

let connect: any;
// 建立连接
const ws = (param: string) => {
    connect = new WebSocket(`ws://localhost:3005`);
    //连接成功后的回调函数
    connect.onopen = () => {
        //发送消息给服务器
        connect.send(param);
        console.log('客户端连接成功');
    };
    //监听服务器发来的消息
    connect.onmessage = (res: object) => {
        try {
            if (typeof JSON.parse(res.data) == 'object') {
                const user = JSON.parse(res.data);
                if (user.objective == 'login') {
                    const { user_name, connection_time } = user.result;
                    if (user.code == 0) {
                        onlineNumber.value += 1;
                        if (user_name == 'pq') {
                            lsftState.value = 1;
                            leftFrom.value.name = user_name;
                            leftFrom.value.time = connection_time;
                        }
                        if (user_name == 'qqq1') {
                            rightState.value = 1;
                            rightFrom.value.name = user_name;
                            rightFrom.value.time = connection_time;
                        }
                    }
                }
                if (user.objective == 'sendOut') {
                    const { user_name, text, time } = user;
                    if (user.user_name == 'pq') {
                        rightData.push({
                            user_name,
                            text,
                            time,
                        });
                    }
                    if (user.user_name == 'qqq1') {
                        leftData.push({
                            user_name,
                            text,
                            time,
                        });
                    }
                }
            }
        } catch (e) {
            console.log(e);
        }
        console.log(`服务端：${res.data}`);
    };
    //关闭连接的回调
    connect.onclose = function () {
        console.log('客户端断开连接');
    };
};
</script>
<style scoped lang="less">
.onLine-center {
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    padding: 10px;

    .onLine-main {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: rgb(222, 233, 234);

        // text-align: center;
        // position: relative;
        .onLine-game {
            display: flex;
            width: calc(100% - 300px);
            height: calc(100% - 300px);
            // padding: 80px;
            background-color: aquamarine;

            .onLine-game-left {
                width: 40%;

                .onLine-game-left-main {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;

                    .onLine-game-left-main-view {
                        // width: 100%;
                        height: 70%;
                        margin: 10px;
                        background-color: aqua;
                        overflow-y: auto;

                        .onLine-game-left-main-view-ul {
                            list-style-type: none;
                            height: 100%;
                            padding: 0;
                            margin: 0;
                            overflow: auto;
                            background-color: aqua;

                            .onLine-game-left-main-view-li {
                                height: 20px;
                                margin: 10px;
                                text-align: left;
                                background-color: #ffff;

                                .p {
                                    font-size: 20px;
                                    border-radius: 4px;
                                }
                            }
                        }
                    }

                    .onLine-game-left-main-input {
                        // width: 100%;
                        height: 30%;
                        margin: 10px;
                        overflow-y: auto;
                        background-color: aqua;
                        text-align: right;
                    }
                }
            }

            .onLine-game-right {
                width: 40%;

                .onLine-game-right-main {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;

                    .onLine-game-right-main-view {
                        // width: 100%;
                        height: 70%;
                        margin: 10px;
                        overflow-y: auto;

                        .onLine-game-right-main-view-ul {
                            list-style-type: none;
                            height: 100%;
                            padding: 0;
                            margin: 0;
                            overflow: auto;
                            background-color: aqua;

                            .onLine-game-right-main-view-li {
                                height: 20px;
                                margin: 10px;

                                text-align: left;
                                background-color: #ffff;

                                .p {
                                    font-size: 20px;
                                    border-radius: 4px;
                                }
                            }
                        }
                    }

                    .onLine-game-right-main-input {
                        // width: 100%;
                        height: 30%;
                        margin: 10px;
                        overflow-y: auto;
                        background-color: aqua;
                        text-align: right;
                    }
                }
            }

            .onLine-game-sidebar {
                width: 20%;

                .onlineNumber {
                    font-size: 14px;
                    font-weight: 800;
                    // width: 100%;
                    margin: 10px;
                    border-radius: 4px;
                    background-color: aqua;
                }

                .lsftState {
                    font-size: 14px;
                    font-weight: 800;
                    // width: 100%;
                    margin: 10px;
                    border-radius: 4px;
                }

                .rightState {
                    font-size: 14px;
                    font-weight: 800;
                    // width: 100%;
                    margin: 10px;
                    border-radius: 4px;
                }
            }
        }
    }
}
</style>
