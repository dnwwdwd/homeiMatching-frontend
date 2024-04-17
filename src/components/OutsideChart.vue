<template>
  <div id="outside-chart" class="chart"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';
import myAxios from "@/plugins/myAxios";
import {message} from "ant-design-vue";

onMounted(async () => {
  const chartDom = document.getElementById('outside-chart');
  const myChart = echarts.init(chartDom);
  let option;

  const res : any= await myAxios.get('/enviro/outside/count');
  if (res.code === 0) {
    const outsideDataList = res.data.outsideDataList;
    console.log(outsideDataList);
    option = {
      title: {
        text: ''
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ['棚外环境'],
        textStyle: {
          color: 'pink'
        }
      },
      radar: {
        indicator: [
          { name: '空气温度（摄氏度）', max: 100 },
          { name: '空气湿度(%)', max: 100 },
          { name: '降雨量', max: 1000 },
          { name: '风速（m/s）', max: 70 },
          { name: '光照强度（勒克斯）', max: 10000 },
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: outsideDataList,
              name: '棚外环境'
            },
          ]
        }
      ]
    };

    option && myChart.setOption(option);

  } else {
    message.error('图表获取失败');
  }
});
</script>

<style scoped>
.chart {
  width: 440px;
  height: 310px;
}
</style>