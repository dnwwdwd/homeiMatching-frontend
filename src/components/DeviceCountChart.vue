<template>
  <div id="device-count-chart" class="chart"></div>
</template>

<script setup lang="ts">
  import {onMounted} from "vue";
  import myAxios from "@/plugins/myAxios";
  import * as echarts from 'echarts';
  import {message} from "ant-design-vue";

  onMounted(async ()=> {
    const chartDom = document.getElementById("device-count-chart");
    const myChart = echarts.init(chartDom);
    let option;

    option && myChart.setOption(option);

    const res : any = await myAxios.post('/device/count');
    if (res?.code === 0) {
      const deviceNameList = res.data.deviceNameList;
      const deviceNumList = res.data.deviceNumList;

      const data = deviceNameList.map((name : string, index : number) => {
        return {value: deviceNumList[index], name: name};
      });

      option = {
        legend: {
          top: 'bottom',
          textStyle: {
            fontSize: 12,
            color: 'pink'
          }
        },
/*        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },*/
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [40, 90],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
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

<style scoped>
.chart {
  width: 440px;
  height: 277px;
}
</style>