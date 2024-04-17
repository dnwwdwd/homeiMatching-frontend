<template>
  <div id="soil-trend-chart" class="chart" style="width: 1038px; height: 400px;"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";
import myAxios from "@/plugins/myAxios";
import {message} from "ant-design-vue";

/*const soilTempList = ref([]);
const soilMoistureList = ref([]);
const phList = ref([]);
const CO2List = ref([]);
const createDateList = ref([]);*/

onMounted(async () => {
  const chartDom = document.getElementById('soil-trend-chart');
  const myChart = echarts.init(chartDom);
  let option;
  const res : any = await myAxios.post('/enviro/soil/trend/count', {
    num : 1,
  });
  if (res.code === 0) {
    const soilTempList = res.data.soilTempList;
    const soilMoistureList = res.data.soilMoistureList;
    const phList = res.data.phList;
    const CO2List = res.data.CO2List;
    const createDateList = res.data.createDateList;

    option = {
      title: {
        text: '土壤状况趋势'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['土壤温度', '土壤湿度', 'PH', 'CO2'],
        textStyle: {
          color: '#B2DC9F',
          fontSize: 18,
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: createDateList,
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '土壤温度',
          type: 'line',
          stack: 'Total',
          data: soilTempList,
        },
        {
          name: '土壤湿度',
          type: 'line',
          stack: 'Total',
          data: soilMoistureList,
        },
        {
          name: 'PH',
          type: 'line',
          stack: 'Total',
          data: phList,
        },
        {
          name: 'CO2',
          type: 'line',
          stack: 'Total',
          data: CO2List,
        },
      ]
    };
    option && myChart.setOption(option);
  } else {
    message.error('图表加载失败');
  }

});

</script>

<style scoped>

</style>