<script setup lang="ts">
import {onMounted} from "vue";
import * as echarts from 'echarts';
import myAxios from "@/plugins/myAxios";
import {message} from "ant-design-vue";

onMounted( async () => {
  const chartDom = document.getElementById('sale-percent-chart');
  const myChart = echarts.init(chartDom);
  let option;

  const res : any = await myAxios.post('/sale/proportion');
  if (res?.code === 0) {
    const plantNameList = res.data.plantNameList;
    const saleTotalList = res.data.saleTotalList;
    const data = saleTotalList.map((name : string, index : number) => {
      return {value: saleTotalList[index], name: name};
    });

    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center',
        textStyle: {
          color: 'pink',
          fontSize: 16,
        }
      },
      series: [
        {
          name: '销售占比',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: data
        }
      ]
    };

    option && myChart.setOption(option);

  } else {
    message.error('图表加载失败');
  }

});
</script>

<template>
  <div id="sale-percent-chart" class="chart"></div>
</template>

<style scoped>
.chart{
  width: 680px;
  height: 410px;
}
</style>