<template>
  <div class="html">
    <div class="background">
      <header-layout />
      <div class="sale_../image">
        <div class="left">
          <div class="salebtn1">
            <router-link to="/sale_chart">
              <h4 style="color:aqua;">图表</h4>
            </router-link>
          </div>
          <div class="salebtn2">
            <router-link to="/sale_detail">
              <h4 style="color:aliceblue;">详情</h4>
            </router-link>
          </div>

        </div>
        <div class="right">
          <div class="sale">
            <h3>销售大屏</h3>
            <sale-chart />
          </div>
          <div class="sale_money">
            <h3>销售价格</h3>
            <sale-price-chart />
          </div>
          <div class="sale_ratio">
            <h3>销售占比</h3>
            <sale-percent-chart />
          </div>
          <div class="sale_data">
            <h3>销售数据</h3>
            <sale-data-chart />
          </div>
        </div>
      </div>
      <div class="changePeng">
<!--        <button @click="queryHouse(1)"><h3>大棚1</h3></button>
        <button @click="queryHouse(2)" style="background-color:#1A2842"><h3>大棚2</h3></button>
        <button @click="queryHouse(3)" style="background-color:#1A2842"><h3>大棚3</h3></button>
        <button @click="queryHouse(4)" style="background-color:#1A2842"><h3>大棚4</h3></button>-->
      </div>

    </div>
  </div>


</template>
<script setup lang="ts">

import HeaderLayout from "@/layouts/HeaderLayout.vue";
import {ref, watchEffect} from "vue";
import myAxios from "@/plugins/myAxios";
import SaleDataChart from "@/components/SaleChart/SaleDataChart.vue";
import SalePercentChart from "@/components/SaleChart/SalePercentChart.vue";
import SalePriceChart from "@/components/SaleChart/SalePriceChart.vue";
import SaleChart from "@/components/SaleChart/SaleChart.vue";

const houseId = ref(1);

watchEffect(async () => {
  const res : any = await myAxios.post('/', {
    houseId: houseId.value,
  });
});

const queryHouse = (value : number) => {
  houseId.value = value;
};

</script>
<style scoped>
.sale{
  background: url(../image/sale/sale_panel.png)no-repeat center;
  width: 700px;
  height: 450px;
  float: left;
}
.sale_money{
  background: url(../image/sale/sale_panel.png)no-repeat center;
  width: 700px;
  height: 450px;
  float: left;
  margin-left: 40px;
}
.sale_data{
  background: url(../image/sale/sale_panel.png)no-repeat center;
  width: 700px;
  height: 450px;
  float: left;
  margin-left: 40px;
}
.sale_ratio{
  background: url(../image/sale/sale_panel.png)no-repeat center;
  width: 700px;
  height: 450px;
  float: left;
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
  height: 100vh;
  width: 100%;
  padding-left: 0%;
  position: fixed;
}
.background{
  margin: auto;
  position: relative;
  top:0;
  width: 2200px;
  height: 1200px;
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
  margin-left: 23%;
  float: left;
}
.salebtn1{
  margin-top: 20%;
  height: 100px;
  background:url(../image/monitor/button_jiankong02.png) no-repeat center;

}
.salebtn2{
  margin-top:15% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong01.png) no-repeat center;

}
h4{
  font:40px lighter;
  text-align: center;
  padding-top:16px ;

}

h3{
  text-align: center;
  font:25px lighter;
  color: aqua;
}
.changePeng{
  margin-top: 863px;
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