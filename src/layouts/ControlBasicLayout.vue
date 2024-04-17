<script setup lang="ts">
import HeaderLayout from "@/layouts/HeaderLayout.vue";
import {provide, ref, watchEffect} from "vue";

const houseId  = ref(1);

const queryHouse = (value : number) => {
  houseId.value = value;
};

watchEffect(() => {

  provide('houseId', houseId.value);
});
</script>

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
          <slot name="rightComponent"></slot>
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

<style scoped>
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
  background:url(../image/monitor/button_jiankong02.png) no-repeat center;

}
.cbtn2{
  margin-top:20% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong01.png) no-repeat center;

}
.cbtn3{
  margin-top:20% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong01.png) no-repeat center;

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
h5{
  font:30px lighter;
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
.data_panel label{
  color: #58DFDF;
  font-size:25px;
}
a{
  text-decoration: none;
}


</style>