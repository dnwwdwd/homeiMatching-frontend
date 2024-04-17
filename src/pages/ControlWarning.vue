<template>
  <control-basic-layout>
    <template v-slot:rightComponent>
      <div class="up">
        <div class="year_month">
          <span style="margin-right: 20px; font-size: 25px">选择时间范围</span>
          <a-range-picker v-model:value="timeInterval" show-time
                          style="width: 400px; height: 40px; margin-right: 220px"/>
        </div>
        <h1>预警发送至&nbsp;&nbsp;</h1>
        <div class="sentEmail">
          <input type="text" class="email" id="email" placeholder="请输入邮箱">
          <button class="sent"></button>
        </div>
      </div>

      <br>

      <div class="down">
        <a-table
            style="margin-top: 30px;"
            :columns="columns"
            :dataSource="data"
            class="antv-table"
        >
          <template #bodyCell="{ column }">
            <template v-if="column.key === 'operation'">
              <a>立即处理</a>
            </template>
          </template>
        </a-table>
      </div>

    </template>
  </control-basic-layout>
</template>

<script setup lang="ts">
import ControlBasicLayout from "@/layouts/ControlBasicLayout.vue";
import type {TableColumnsType} from 'ant-design-vue';
import {message} from "ant-design-vue";
import {inject, ref, watchEffect} from "vue";
import myAxios from "@/plugins/myAxios";
import type {Dayjs} from 'dayjs';

type RangeValue = [Dayjs, Dayjs];

const timeInterval = ref<RangeValue>();

const columns: TableColumnsType = [
  { title: '设备', width: 100, dataIndex: 'equipment', key: 'equipment', fixed: 'left' },
  { title: '时间', width: 100, dataIndex: 'time', key: 'time', fixed: 'left' },
  { title: '事件', dataIndex: 'event', key: 'event', width: 150 },
  {
    title: '处理',
    key: 'operation',
    fixed: 'right',
    width: 50,
  },
];
interface WarnData {
  equipment: string;
  time: string;
  event: string;
  status: string;
}

interface DataItem {
  key: number;
  equipment: string;
  time: string;
  event: string;
  status: string;
  operation?: string;
}

const data = ref<DataItem[]>([]);

const houseId = inject('houseId');

watchEffect(async () => {
  const res : any = await myAxios.post('/device/warn/list', {
    houseId: houseId,
/*    startDatetime: timeInterval.value?.[0],
    endDatetime: timeInterval.value?.[1],*/
  });
  console.log(res); // 查看返回的完整数据结构
  if (res?.code === 0) {
    data.value = res.data.map((item: WarnData, index: number) => ({
      key: index,
      equipment: item.equipment,
      time: item.time,
      event: item.event,
      status: item.status,
    }));
    console.log(data.value); // 打印更新后的data值
  } else {
    message.error('数据获取失败');
  }
});

</script>

<style scoped>
h1{
    color:#1296DB; 
    font:30px lighter;
    float: left;
    margin-left: 0px;
    margin-top: 10px;
}
.query{
    width: 40px;
    height: 60px;
    background: url(../image/monitor/query.png) no-repeat;
    
}
.sent{
    width: 40px;
    height: 60px;
    background: url(../image/control/sent.png) no-repeat center;
    
}
.sentEmail{
    float: right;
    margin-right: 320px;
}
.sentEmail input{
    width: 300px;
    height: 60px;
    margin-right: 20px;
    float: left;
    background: #00040C;
    border-radius: 10px;
    border: #1296DB 4px solid;
    font-size:30px;
    text-align: center;
}
.year_month{
    float: left;
    margin-left: 2%;
}
.year_month input{
    width: 160px;
    height: 60px;
    margin-right: 20px;
    float: left;
    background: #00040C;
    border-radius: 10px;
    border: #1296DB 4px solid;
    font-size:30px;
    text-align: center;
    
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
}

h4{
    font:35px lighter;
    text-align: center;
    padding-top:20px ;

}
h3{
    text-align: center;
    font:25px lighter;
    color: aqua;
}
.up{
    margin-left: 5%;
    margin-top: 60px;
}
.down{
    margin-top: 65px;
    margin-left: 4.5%;
/*    background: url(../image/control/warning_panel.png) center no-repeat;*/
    height: 710px;
    width: 1436px;
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