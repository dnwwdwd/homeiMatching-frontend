<template>
    <div class="html">
        <div class="background">
          <header-layout/>
        <div class="mainbox">
            <div class="left">
                <div class="panel">
                    <h4>销售统计</h4>
                  <sale-count-chart/>
                </div>
                <div class="panel">
                    <h4>棚外环境</h4>
                  <outside-chart />
                </div>
                <div class="panel-bottom">
                    <h4>预警事件</h4>
                  <warn-event-plus :warn-List="warnList"/>
                </div>
            </div>
            <div class="main">
                <house-monitor />
            </div>
            <div class="right">
                <div class="panel">
                    <h4>农场网关</h4>
                  <device-count-chart />
                </div>
                <div class="panel">
                    <h4>大棚控制</h4>
                  <house-control />
                </div>
              <div class="panel-bottom">
                    <h4>棚内环境</h4>
                  <inside-chart/>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import SaleCountChart from "@/components/SaleCountChart.vue";
import InsideChart from "@/components/InsideChart.vue";
import OutsideChart from "@/components/OutsideChart.vue";
import myAxios from "@/plugins/myAxios";
import WarnEventPlus from "@/components/WarningEventPlus.vue";
import DeviceCountChart from "@/components/DeviceCountChart.vue";
import HouseControl from "@/components/HouseControl.vue";
import HouseMonitor from "@/components/HouseMonitor.vue";
import HeaderLayout from "@/layouts/HeaderLayout.vue";


const warnList = ref([]);
  onMounted(async () => {
    const res : any = await myAxios.post('/warn/list/vo');
    warnList.value = res.data;
  });

</script>

<style scoped>

/**{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}*/

.html{
  background:#00040C;
  align-items: center;
  font-size: 16px;
  height: 100%;
  width: 100%;
  position: fixed;
  padding-left: 0%;
}
header{
  background: url(../image/title.png) no-repeat center;
  height: 10%;
  position: relative;
  top:0;
}
h3{
  font-size: 35px;
  color:#fff;
  line-height: 120px;
  text-align: center;
}
.background{
  margin: auto;
  position: relative;
  top:0;
  width:2200px;
  height: 100%;
/*  height: 1200px;*/
  background: url('../image/background.jpg') no-repeat top center;
}

.left{
  position: absolute;
  height: 80%;
  width: 20%;
  margin-left: 9%;
  float: left;
}

.main{
  position: absolute;
  height: 500px;
  width: 40%;
  background: url(../image/main.png) center;
  margin-left: 660px;
  float: left;
  margin-top: 150px;
}

.right{
  position: absolute;
  height: 80%;
  width: 20%;
  margin-left: 71%;
  float: left;
}
.panel{
  width: 440px;
  height: 310px;
  background:url(../image/panel.png) no-repeat center;
  margin-bottom: 5px;
  background-size: cover;
}
.panel-bottom{
  width: 440px;
  height: 255px;
  background:url(../image/panel.png) no-repeat center;
  margin-bottom: 0px;
  background-size: cover;
}
h4{
  font:20px lighter;
  color:#58DFDF;
  text-align: center;
}
a{
  font:30px lighter;
  color:#fff;
  text-decoration: none;
  margin-top: 40px;
  float: left;
  text-align: center;
}

</style>