<script setup lang="ts">
import * as echarts from 'echarts';
import {onMounted} from "vue";

onMounted(() => {
  const chartDom = document.getElementById('sale-price-chart');
  const myChart = echarts.init(chartDom);

  let option;

  const names = [
    '土豆',
    '地瓜',
    '青椒',
    '韭菜',
    '豌豆',
    '黄豆',
    '西瓜',
    '豆角',
    '苹果',
    '梨',
  ];
  const years = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const shuffle = (array : any) => {
    let currentIndex = array.length;
    let randomIndex = 0;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }
    return array;
  };
  const generateRankingData = () => {
    const map = new Map();
    const defaultRanking = Array.from({ length: names.length }, (_, i) => i + 1);
    for (const _ of years) {
      const shuffleArray = shuffle(defaultRanking);
      names.forEach((name, i) => {
        map.set(name, (map.get(name) || []).concat(shuffleArray[i]));
      });
    }
    return map;
  };
  const generateSeriesList = () => {
    const seriesList = [];
    const rankingMap = generateRankingData();
    rankingMap.forEach((data, name) => {
      const series = {
        name,
        symbolSize: 20,
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        endLabel: {
          show: true,
          formatter: '{a}',
          distance: 20
        },
        lineStyle: {
          width: 4
        },
        data
      };
      seriesList.push(series);
    });
    return seriesList;
  };
  option = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      textStyle: {
        color: '#B2DC9F',
        fontSize: 15,
      }
    },
    grid: {
      left: 30,
      right: 110,
      bottom: 30,
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      splitLine: {
        show: true
      },
      axisLabel: {
        margin: 30,
        fontSize: 16
      },
      boundaryGap: false,
      data: years
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        margin: 30,
        fontSize: 16,
        formatter: '#{value}'
      },
      inverse: true,
      interval: 1,
      min: 1,
      max: names.length
    },
    series: generateSeriesList()
  };

  option && myChart.setOption(option);

});

</script>

<template>
  <div id="sale-price-chart" class="chart"></div>
</template>

<style scoped>
.chart{
  width: 680px;
  height: 430px;
}
</style>