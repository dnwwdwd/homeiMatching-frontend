<template>
<div class="html">
    <div class="background">
      <header-layout/>
        <div class="jiankong">
            <div class="left">
                <div class="jkbtn1">
                    <h4 style="color:aliceblue;" @click="toNow">实时</h4>
                </div>
                <div class="jkbtn2">
                    <h4 style="color:aqua;" @click="toHistory">历史</h4>
                </div>
                
            </div>
            <div class="right">
                <!--这里需要改一下下拉菜单选择-->
                <div class="setInput">

                    <a-dropdown-button type="primary" style="width: 400px; margin-right: 200px;" v-if="isHistory">
                      <template #overlay>
                        <a-menu @click="onClick" >
                          <a-menu-item key="year">年</a-menu-item>
                          <a-menu-item key="month">月</a-menu-item>
                          <a-menu-item key="day">日</a-menu-item>
                        </a-menu>
                      </template>
                      设置保存间隔
                    </a-dropdown-button>

                  <span style="margin-right: 20px; font-size: 25px" v-if="isHistory">选择时间范围</span>
                  <a-range-picker v-model:value="timeInterval" show-time v-if="isHistory"
                                  style="width: 400px; height: 40px; margin-right: 220px"/>

                </div>
                <!--显示监控区域-->
                <br>
                <div class="history">
                  <real-time-monitor v-if="!isHistory" :videoUrl="videoUrl"/>
                  <video-card v-if="isHistory" :video-list="videoList"/>

                </div>
              <a-pagination v-if="isHistory" v-model:current="current" :page-size="pageSize" :total="total" show-less-items />
            </div>
        </div>
        <div class="changePeng">
                <button @click="queryHouse(1)"><h3>大棚1</h3></button>
                <button @click="queryHouse(2)" style="background-color:#1A2842"><h3>大棚2</h3></button>
                <button @click="queryHouse(3)" style="background-color:#1A2842"><h3>大棚3</h3></button>
                <button @click="queryHouse(4)" style="background-color:#1A2842"><h3>大棚4</h3></button>
        </div>
        
    </div>
    </div>


</template>

<script lang="ts" setup>
import HeaderLayout from "@/layouts/HeaderLayout.vue";
import {MenuProps, message} from "ant-design-vue";
import {ref, watch, watchEffect} from "vue";
import VideoCard from "@/components/VideoCard.vue";
import myAxios from "@/plugins/myAxios";
import type {Dayjs} from 'dayjs';
import RealTimeMonitor from "@/components/RealTimeMonitor.vue";

type RangeValue = [Dayjs, Dayjs];

const saveInterval = ref('日');
const onClick: MenuProps['onClick'] = ({ key }) => {
  console.log(`Click on item ${key}`);
  message.success('保存间隔已更改为:' + `${key}`);
};

const timeInterval = ref<RangeValue>();

const isHistory = ref<boolean>(true);
const videoList = ref([]);
const houseId = ref(1);

const current = ref(1);
const total = ref();
const pageSize = ref(6);

const videoUrl = ref();

/**
 * 跳转实时页面并查询实时监控
 */
const toNow = () => {
  message.success('now');
  isHistory.value = false;
};
const toHistory = () => {
  message.success('history');
  isHistory.value = true;
};

/**
 * 查询历史监控
 */
watchEffect(async() => {
  if (isHistory.value) {
    const res : any = await myAxios.post('video/history/list',{
      houseId: houseId.value,
      current: current.value,
      startDatetime: timeInterval.value?.[0],
      endDatetime: timeInterval.value?.[1],
      pageSize: 6,
      type: 0,
    });
    if (res?.code === 0) {
      message.success('历史监控查询成功');
      videoList.value = res.data.videoList;
      total.value = res.data.total;
    } else {
      message.error('历史监控查询失败');
    }
  } else {
    const res: any = await myAxios.post('/video/now/list', {
      houseId: houseId.value,
      type: 1,
    });
    if (res?.code === 0) {
      videoUrl.value = res.data;
    } else {
      message.error('实时监控查询失败');
    }
  }
});

/**
 * 切换大棚
 */
const queryHouse = (value : number) => {
  houseId.value = value;
};


</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
}
.html{
  background:#00040C;
  align-items: center;
  font-size: 16px;
  height: 100%;
  width: 100%;
  position: fixed;
  padding-left: 0%;
}
.background{
    margin: auto;
    position: relative;
    top:0;
    width:2200px;
    background: url(../image/background.jpg) no-repeat top center;
}

.left{
    position: absolute;
    height: 60%;
    width: 15%;
    margin-left: 9%;
    float: left;
}

.right{
    position: absolute;
    height: 80%;
    width: 80%;
    margin-left: 25%;
    float: left;
}
.jkbtn1{
    margin-top: 280px;
    height: 100px;
    background:url(../image/monitor/button_jiankong01.png) no-repeat center;
    
}
.jkbtn2{
    margin-top: 40px;
    height: 100px;
    background:url(../image/monitor/button_jiankong02.png) no-repeat center;
    
}
h4{
    font:40px lighter;
    text-align: center;
    padding-top:16px ;
    
}
h3{
    text-align: center;
    font: 25px lighter;
}

h5{
    font: 30px lighter;
}
.setInput{
    margin-left: 5%;
    margin-top: 45px;
}
.setInput input{
    width: 200px;
    height: 60px;
    margin-right: 20px;
    float: left;
    background: #00040C;
    border-radius: 10px;
    border: #1296DB 4px solid;
    font-size:30px;
    text-align: center;
    
}
.setInput input:focus{
    outline: none;
}
.history{
  width: 1400px;
  margin-top:10px;
  height: 700px;
}
.changePeng{
    margin-top: 850px;
    text-align: center;
}
.changePeng button{
    height: 50px;
    width: 120px;
    margin: 20px;
    border-radius:15px;
    border-style:none;
    background-color: #1B5F24;
}

/* 样式用来自定义常规的分页项 */
::v-deep .ant-pagination-item {
  background: #fff; /* 或者任何和您的背景形成对比的颜色 */
  color: #000; /* 文本颜色需要和项背景颜色形成对比 */
  border: 1px solid #d9d9d9; /* 边框颜色可根据需求变更 */
}

/* 当鼠标悬停时的分页项样式 */
::v-deep .ant-pagination-item:hover {
  border-color: #1890ff; /* 或者需要高亮的颜色 */
}

/* 所有分页链接的样式（包括前一页和后一页链接） */
::v-deep .ant-pagination-item-link {
  background: #fff; /* 或者任何和您的背景形成对比的颜色 */
  color: #000; /* 文本颜色 */
}

</style>