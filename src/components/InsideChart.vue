<template>
  <div id="inside-chart" class="chart"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';
import myAxios from "@/plugins/myAxios";
import {message} from "ant-design-vue";

 onMounted(async () => {
  const chartDom = document.getElementById('inside-chart');
  const myChart = echarts.init(chartDom);
  let option;

  const res : any= await myAxios.get('/enviro/inside/count');
  if (res.code === 0) {
    const insideDataList = res.data.insideDataList;
    console.log(insideDataList);
    option = {
      title: {
        text: ''
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ['棚内环境'],
        textStyle: {
          color: 'pink'
        }
      },
      radar: {
        indicator: [

          { name: '空气温度（摄氏度）', max: 100 },
          { name: '空气湿度(%)', max: 100 },
          { name: '土壤温度（摄氏度）', max: 100 },
          { name: '土壤湿度（%）', max: 100 },
          { name: 'CO2(%)', max: 100 },
          { name: 'PH', max: 15 },
          { name: '光照强度（勒克斯）', max: 10000 },
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: insideDataList,
              name: '棚内环境'
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
  height: 255px;
}
</style>