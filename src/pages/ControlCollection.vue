<template>
  <div class="html">
    <div class="background">
      <header-layout />
      <div class="control_equip">
        <div class="left">
          <div class="cbtn2">
            <router-link to="/control">
              <h4 style="color:aqua;">设备控制</h4>
            </router-link>
          </div>
          <div class="cbtn2">
            <router-link to="/control_warning">
              <h4 style="color:aliceblue;">预警处理</h4>
            </router-link>
          </div>
          <div class="cbtn3">
            <router-link to="/control_collection">
              <h4 style="color:aliceblue;">数据采集</h4>
            </router-link>
          </div>

        </div>
        <div class="right">
          <div class="up">
            <div class="year_month">
              <span style="margin-right: 20px; font-size: 25px">选择时间范围</span>
              <a-range-picker v-model:value="timeInterval" show-time
                              style="width: 400px; height: 40px; margin-right: 220px"/>
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

<script setup lang="ts">
import type {Dayjs} from 'dayjs';
import {ref, watchEffect} from "vue";
import HeaderLayout from "@/layouts/HeaderLayout.vue";
import myAxios from "@/plugins/myAxios";
import {message, TableColumnsType} from "ant-design-vue";

type RangeValue = [Dayjs, Dayjs];

const timeInterval = ref<RangeValue>();

const houseId = ref(1);

const columns: TableColumnsType = [
  { title: '时间', width: 100, dataIndex: 'time', key: 'time', fixed: 'left' },
  { title: '温度', dataIndex: 'soilTemperature', key: 'soilTemperature', width: 150 },
  { title: '湿度', dataIndex: 'soilMoisture', key: 'soilMoisture', width: 150 },
  { title: '光照', dataIndex: 'lightIntensity', key: 'lightIntensity', width: 150 },
  { title: 'PH', dataIndex: 'ph', key: 'ph', width: 150 },
  { title: '含氧量', dataIndex: 'o2', key: 'o2', width: 150 },
  { title: 'CO2浓度', dataIndex: 'co2', key: 'co2', width: 150 },
  { title: '建议', dataIndex: 'suggestion', key: 'suggestion', width: 150 },
];
interface WarnData {
  time: string;
  soilTemperature: number;
  soilMoisture: number;
  lightIntensity: number;
  ph: number;
  o2: number;
  co2: number;
  suggestion: number;
}

interface DataItem {
  key: number;
  time: string;
  soilTemperature: number;
  soilMoisture: number;
  lightIntensity: number;
  ph: number;
  o2: number;
  co2: number;
  suggestion: number;
}

const data = ref<DataItem[]>([]);

watchEffect(async () => {
  const res : any = await myAxios.post('/enviro/collect/list', {
    num: houseId.value,
    /*    startDatetime: timeInterval.value?.[0],
        endDatetime: timeInterval.value?.[1],*/
  });
  console.log(res); // 查看返回的完整数据结构
  if (res?.code === 0) {
    data.value = res.data.map((item: WarnData, index: number) => ({
      key: index,
      time: item.time,
      soilTemperature: item.soilTemperature,
      soilMoisture: item.soilMoisture,
      lightIntensity: item.lightIntensity,
      ph: item.ph,
      o2: item.o2,
      co2: item.co2,
      suggestion: item.suggestion,
    }));
    console.log(data.value); // 打印更新后的data值
  } else {
    message.error('数据获取失败');
  }
});

const queryHouse = (value : number) => {
  houseId.value = value;
};

</script>

<style scoped>
h1{
  color:#1296DB;
  font:30px lighter;
  float: left;
  margin-left: 180px;
  margin-top: 10px;
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
  top: 0;
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
  margin-left: 20%;
  float: left;
}
.cbtn2{
  margin-top:20% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong01.png) no-repeat center;

}
.cbtn3{
  margin-top:20% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong02.png) no-repeat center;

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
  margin-top: 3%;
}

.down{
  margin-top:1%;
  margin-left: 4.5%;
/*  background: url(../image/control/collection_panel.png) center no-repeat;*/
  height:800px;
  width: 1450px;

}

.changePeng{
  margin-top:40%;
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
a{
  text-decoration: none;
}
</style>