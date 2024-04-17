<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import {ref, provide, watchEffect} from "vue";
import myAxios from "@/plugins/myAxios";
import {message} from "ant-design-vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

provide(THEME_KEY, "dark");

watchEffect(async () => {
  const res : any= await myAxios.get('/sale/top');
  if (res.code === 0) {
    console.log(res.data);

    // 将数据转换为ECharts所需的格式
    const transformedData = res.data.plantNameList.map((name : string, index : number) => {
      return { name: name, value: res.data.saleTotalList[index] };
    });

    // 更新ECharts的配置
    option.value.series[0].data = transformedData;

    // 更新图例数据
    option.value.legend.data = res.data.plantNameList;
  } else {
    message.error('图表获取失败');
  }
});


const option = ref({
  title: {
    text: "热销榜",
    left: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: [],
    textStyle: {
      color: 'purple',
      fontSize: 15
    }
  },
  series: [
    {
      name: "",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
});

</script>

<style scoped>
.chart {
  width: 440px;
  height: 282px;
}
</style>