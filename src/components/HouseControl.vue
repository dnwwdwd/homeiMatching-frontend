<template>

  <div style="display: flex; flex-direction: row; margin-left: 10px">

    <div style="display: flex; flex-direction: column; margin-left: 130px">
      <img class="custom-icon" src="../icon/jiaoshui.png" style="margin-top: 7px" width="30">

      <img class="custom-icon" src="../icon/杀虫剂.png" width="30" style="margin-top: 9px">

      <img class="custom-icon" src="../icon/施肥.png" width="35" style="margin-top: 10px">

      <img class="" src="../icon/水帘.png" width="35" style="margin-top: 10px">

      <img class="custom-icon" src="../icon/遮阳帘.png" width="35" style="margin-top: 10px"/>

      <img class="custom-icon" src="../icon/卷帘门.png" width="35" style="margin-top: 6px"/>
    </div>

    <div style="display: flex; flex-direction: column; margin-top: 8px; margin-left: 8px">
      <span class="custom-span" style="font-size: 20px; margin-top: 1px; color: white;">浇水</span>
      <span class="custom-span" style="font-size: 20px; color: white;">杀虫</span>
      <span class="custom-span" style="font-size: 20px; color: white;">施肥</span>
      <span class="custom-span" style="font-size: 20px; color: white;">水帘</span>
      <span class="custom-span" style="font-size: 20px; color: white;">遮阳帘</span>
      <span class="custom-span" style="font-size: 20px; color: white;">卷帘门</span>
    </div>

    <div style="display: flex; flex-direction: column; margin-left: 70px;">
      <a-switch class="custom-switch" @click="jiaoshuiIsClicked" v-model:checked="jiaoshuiState.checked" checked-children="开" un-checked-children="关"
                style="margin-top: 10px"/>
      <a-switch class="custom-switch" @click="shachongIsClicked" v-model:checked="shachongState.checked" checked-children="开" un-checked-children="关"/>
      <a-switch class="custom-switch" @click="shifeiIsClicked" v-model:checked="shifeiState.checked" checked-children="开" un-checked-children="关"/>
      <a-switch class="custom-switch" @click="shuilianIsClicked" v-model:checked="shuilianState.checked" checked-children="开" un-checked-children="关"/>
      <a-switch class="custom-switch" @click="zheyanglianIsClicked" v-model:checked="zheyanglianState.checked" checked-children="开" un-checked-children="关"/>
      <a-switch class="custom-switch" @click="juanlianmenIsClicked" v-model:checked="juanlianmenState.checked" checked-children="开" un-checked-children="关"/>
    </div>
  </div>

</template>

<script setup lang="ts">
import {reactive} from 'vue';
import {message} from "ant-design-vue";

const jiaoshuiState = reactive({
  checked: false,
});

const shachongState = reactive({
  checked: false,
});

const shifeiState = reactive({
  checked: false,
});

const shuilianState = reactive({
  checked: false,
});

const zheyanglianState = reactive({
  checked: false,
});

const juanlianmenState = reactive({
  checked: false,
});

const jiaoshuiIsClicked = () => {
  if (jiaoshuiState.checked) {
    message.success('浇水设备已开启');
  } else {
    message.info('浇水设备已关闭');
  }
};

const shachongIsClicked = () => {
  if (jiaoshuiState.checked) {
    message.success('杀虫设备已开启');
  } else {
    message.info('杀虫设备已关闭');
  }
};

const shifeiIsClicked = () => {
  if (jiaoshuiState.checked) {
    message.success('施肥设备已开启');
  } else {
    message.info('施肥设备已关闭');
  }
};

const shuilianIsClicked = () => {
  if (jiaoshuiState.checked) {
    message.success('水帘已开启');
  } else {
    message.info('水帘已关闭');
  }
};
const zheyanglianIsClicked = () => {
  if (jiaoshuiState.checked) {
    message.success('遮阳帘已开启');
  } else {
    message.info('遮阳帘已关闭');
  }
};
const juanlianmenIsClicked = () => {
  if (jiaoshuiState.checked) {
    message.success('卷帘门已开启');
  } else {
    message.info('卷帘门已关闭');
  }
};

</script>


<style scoped>

.custom-span {
  margin-bottom: 20px;
}

.custom-switch{
  width: 70px;
  height: 25px;
  background-color: #42b983;
  margin-bottom: 18px;
}

</style>