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
                  <div class="up">
                     <div class="data_panel">
                      <h3>棚内数据</h3>
                      <!--这里的内容需要填充-->
                      <div class="data">
                          <div class="sun_span">
                              <div class="model_div">
                                  <label>Lux</label>
                                  <h3 style="float:left; font-size: 25px; margin-left:78px;margin-top: 0px">{{ lightValue }}</h3>
                                  <br>

                              </div>
                            <a-input-number
                                v-model:value="lightValue"
                                :min="0"
                                :max="10000"
                                :step="1"
                                style="margin-top: 30px; background-color: #0F6A9C; border: #0F6A9C"
                            />


                      </div>
                      <div class="temp_span">
                          <div class="model_div">
                                  <label>℃</label>
                                  <h3 style="float:left; margin-left:115px; margin-top: 0px">{{ tempValue }}</h3>
                                  <br>
                            <a-input-number
                                v-model:value="tempValue"
                                :min="0"
                                :max="10000"
                                :step="0.1"
                                style="margin-top: 30px; background-color: #0F6A9C; border: #0F6A9C"
                            />
                          </div>
                      </div>
                      <div class="wet_span">
                          <div class="model_div">
                                  <label>%</label>
                                  <h3 style="float:left; margin-left:115px; margin-top: 0px">{{ moistureValue }}</h3>
                                  <br>
                            <a-input-number
                                v-model:value="moistureValue"
                                :min="0"
                                :max="10000"
                                :step="0.1"
                                style="margin-top: 30px; background-color: #0F6A9C; border: #0F6A9C"
                            />
                          </div>
                      </div>
                      <div class="o2_span">
                          <div class="model_div">
                                  <label>%</label>
                                  <h3 style="float:left; margin-left:115px;margin-top:0">{{ o2Value }}</h3>
                                  <br>
                            <a-input-number
                                v-model:value="o2Value"
                                :min="0"
                                :max="10000"
                                :step="0.1"
                                style="margin-top: 30px; background-color: #0F6A9C; border: #0F6A9C"
                            />
                          </div>
                      </div>
                      <div class="co2_span">
                          <div class="model_div">
                                  <label>%</label>
                                  <h3 style="float:left; margin-left:115px;margin-top:0">{{ co2Value }}</h3>
                                  <br>
                            <a-input-number
                                v-model:value="co2Value"
                                :min="0"
                                :max="10000"
                                :step="0.1"
                                style="margin-top: 30px; background-color: #0F6A9C; border: #0F6A9C"
                            />
                          </div>
                      </div>
                        <div class="ph_span">
                          <div class="model_div">
                            <label>%</label>
                            <h3 style="float:left; margin-left:115px;margin-top:0">{{ phValue }}</h3>
                            <br>
                            <a-input-number
                                v-model:value="phValue"
                                :min="0"
                                :max="15"
                                :step="0.1"
                                style="margin-top: 30px; background-color: #0F6A9C; border: #0F6A9C"
                            />
                          </div>
                        </div>
                      </div>

                     </div>
  <!--这里的button需要改-->
                     <div class="equip_panel">
                          <h3>大棚设备</h3>
                          <div class="equip">
                              <div class="zheyanglian_span">
                                <a-switch class="custom-switch" @click="zheyanglianIsClicked" v-model:checked="zheyanglianState.checked" checked-children="开" un-checked-children="关"/>
                              </div>
                              <div class="shuilian_span">
                                <a-switch class="custom-switch" @click="shuilianIsClicked" v-model:checked="shuilianState.checked" checked-children="开" un-checked-children="关"/>
                              </div>
                              <div class="juanpeng_span">
                                <a-switch class="custom-switch" @click="juanlianmenIsClicked" v-model:checked="juanlianmenState.checked" checked-children="开" un-checked-children="关"/>
                              </div>
                              <div class="wind1_span">
                                <a-switch class="custom-switch" @click="fengji1IsClicked" v-model:checked="fengji1State.checked" checked-children="开" un-checked-children="关"/>
                              </div>
                              <div class="wind2_span">
                                <a-switch class="custom-switch" @click="fengji2IsClicked" v-model:checked="fengji2State.checked" checked-children="开" un-checked-children="关"/>
                              </div>
                              <div class="wind3_span">
                                <a-switch class="custom-switch" @click="fengji3IsClicked" v-model:checked="fengji3State.checked" checked-children="开" un-checked-children="关"/>
                              </div>
  <!--end-->
                          </div>

                     </div>

                  </div>

                  <br>
                  <div class="down">
                      <div class="tendency_panel">
                          <h3>土壤状况趋势</h3>
                        <soil-trend-chart1 v-if="houseId===1"/>
                        <soil-trend-chart2 v-if="houseId===2"/>
                        <soil-trend-chart3 v-if="houseId===3"/>
                        <soil-trend-chart4 v-if="houseId===4"/>
                      </div>

                      <div class="star_equip">
                          <h3>启动装置</h3>

                        <div style="display: flex; flex-direction: row; margin-left: 5px">
                          <div style="display: flex; flex-direction: column; margin-left: 80px; margin-top: 70px">
                            <img class="custom-icon" src="../icon/jiaoshui.png" style="margin-top: 7px" width="30">

                            <img class="custom-icon" src="../icon/杀虫剂.png" width="30" style="margin-top: 70px">

                            <img class="custom-icon" src="../icon/施肥.png" width="35" style="margin-top: 55px">
                          </div>

                          <div style="display: flex; flex-direction: column; margin-left: 8px;margin-top: 82px">
                            <span class="custom-span" style="font-size: 20px; color: white; margin-bottom: 74px; margin-top: 2px">浇水</span>
                            <span class="custom-span" style="font-size: 20px; color: white; margin-bottom: 68px">杀虫</span>
                            <span class="custom-span" style="font-size: 20px; color: white; margin-bottom: 68px">施肥</span>
                          </div>

                          <div style="display: flex; flex-direction: column; margin-left: 20px; margin-top: 70px">
                            <a-switch class="custom-switch-bottom" @click="jiaoshuiIsClicked" v-model:checked="jiaoshuiState.checked" checked-children="开" un-checked-children="关"
                                      style="margin-top: 10px"/>
                            <a-switch class="custom-switch-bottom" @click="shachongIsClicked" v-model:checked="shachongState.checked" checked-children="开" un-checked-children="关"/>
                            <a-switch class="custom-switch-bottom" @click="shifeiIsClicked" v-model:checked="shifeiState.checked" checked-children="开" un-checked-children="关"/>
                          </div>
                        </div>

                      </div>

                  </div>

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
<script setup lang="ts">

import HeaderLayout from "@/layouts/HeaderLayout.vue";
import {reactive, ref, watchEffect} from "vue";
import {message} from "ant-design-vue";
import SoilTrendChart1 from "@/components/ControlDevice/SoilTrendChart1.vue";
import SoilTrendChart2 from "@/components/ControlDevice/SoilTrendChart2.vue";
import SoilTrendChart3 from "@/components/ControlDevice/SoilTrendChart3.vue";
import SoilTrendChart4 from "@/components/ControlDevice/SoilTrendChart4.vue";
import myAxios from "@/plugins/myAxios";

const jiaoshuiState = reactive({
  checked: false,
});

const shachongState = reactive({
  checked: false,
});

const shifeiState = reactive({
  checked: false,
});

const zheyanglianState = reactive({
  checked: false,
});

const shuilianState = reactive({
  checked: false,
});

const juanlianmenState = reactive({
  checked: false,
});

const fengji1State = reactive({
  checked: false,
});

const fengji2State = reactive({
  checked: false,
});

const fengji3State = reactive({
  checked: false,
});

const houseId = ref(1);

const fengji1IsClicked = () => {
  if (fengji1State.checked) {
    message.success('风机一已开启');
  } else {
    message.info('风机一已关闭');
  }
};

const jiaoshuiIsClicked = () => {
  if (jiaoshuiState.checked) {
    message.success('浇水设备已开启');
  } else {
    message.info('浇水设备已关闭');
  }
};

const shachongIsClicked = () => {
  if (jiaoshuiState.checked) {
    message.success('杀虫设备已开启');
  } else {
    message.info('杀虫设备已关闭');
  }
};

const shifeiIsClicked = () => {
  if (jiaoshuiState.checked) {
    message.success('施肥设备已开启');
  } else {
    message.info('施肥设备已关闭');
  }
};

const fengji2IsClicked = () => {
  if (fengji2State.checked) {
    message.success('风机二已开启');
  } else {
    message.info('风机二已关闭');
  }
};

const fengji3IsClicked = () => {
  if (fengji3State.checked) {
    message.success('风机三已开启');
  } else {
    message.info('风机三已关闭');
  }
};

const shuilianIsClicked = () => {
  if (shuilianState.checked) {
    message.success('水帘已开启');
  } else {
    message.info('水帘已关闭');
  }
};
const zheyanglianIsClicked = () => {
  if (zheyanglianState.checked) {
    message.success('遮阳帘已开启');
  } else {
    message.info('遮阳帘已关闭');
  }
};
const juanlianmenIsClicked = () => {
  if (juanlianmenState.checked) {
    message.success('卷棚已开启');
  } else {
    message.info('卷棚已关闭');
  }
};

const queryHouse = (value : number) => {
  houseId.value = value;
};

const lightValue = ref();
const tempValue = ref();
const moistureValue = ref();
const o2Value = ref();
const co2Value = ref();
const phValue = ref();

watchEffect(async () => {
  const res : any = await myAxios.post('/enviro/soil/data/list',{
    houseId: houseId.value,
  });
  if (res?.code == 0) {
    lightValue.value = res.data.lightValue;
    tempValue.value = res.data.tempValue;
    moistureValue.value = res.data.moistureValue;
    o2Value.value = res.data.o2Value;
    co2Value.value = res.data.co2Value;
    phValue.value = res.data.phValue;
  } else {
    message.error('土壤数据获取失败');
  }
});
</script>
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
.data_panel{
    background: url(../image/control/data_panel.png) no-repeat center;
    width: 700px;
    height: 400px;
    float: left;
}
.equip_panel{
    background: url(../image/control/equip_panel.png) no-repeat center;
    width: 660px;
    height: 400px;
    float: left;
    margin-left: 30px;
}
.equip{
    margin-top: 3%;
}

.tendency_panel{
    background: url(../image/control/tendency_panel.png) no-repeat center;
    width: 1050px;
    height: 450px;
    float: left;
}
.star_equip{
    background: url(../image/control/star_panel.png) no-repeat center;
    width: 320px;
    height: 450px;
    margin-left: 30px;
    float: left;
}
h3{
    text-align: center;
    font:25px lighter;
    color: aqua;
}
.changeBigbutton{
    height: 50px;
    background: url(../image/monitor/bigbutton.png) no-repeat;
    margin-left:350px;
    margin-top: 200px;
    
}
h5{
    font:30px lighter;
}
.up{
    margin-left: 5%;
    margin-top: 1%;
    
}

.down{
    margin-top:23%;
    margin-left: 4.5%;

}
.zheyanglian_span{
    background: url(../image/control/zheyang_span.png) no-repeat center;
    width: 180px;
    height: 150px;
    float: left;
    margin-left: 30px;
}
.shuilian_span{
    background: url(../image/control/shuilian_span.png) no-repeat center;
    width: 180px;
    height: 150px;
    float: left;
    margin-left: 30px;
    
}
.juanpeng_span{
    background: url(../image/control/juanpeng_span.png) no-repeat center;
    width: 180px;
    height: 150px;
    float: left;
    margin-left: 30px;
}
.wind1_span{
    background: url(../image/control/wind1_span.png) no-repeat center;
    width: 180px;
    height: 150px;
    float: left;
    margin-left: 30px;
}
.wind2_span{
    background: url(../image/control/wind2_span.png) no-repeat center;
    width: 180px;
    height: 150px;
    float: left;
    margin-left: 30px;
}
.wind3_span{
    background: url(../image/control/wind3_span.png) no-repeat center;
    width: 180px;
    height: 150px;
    float: left;
    margin-left: 30px;
}
.sun_span{
    background: url(../image/control/sun_span.png) no-repeat center;
    width: 200px;
    height: 150px;
    float: left;
    margin-left: 30px;
}
.temp_span{
    background: url(../image/control/temp_span.png) no-repeat center;
    width: 200px;
    height: 150px;
    float: left;
    margin-left: 20px;
}
.wet_span{
    background: url(../image/control/wet_span.png) no-repeat center;
    width: 200px;
    height: 150px;
    float: left;
    margin-left: 20px;
}
.o2_span{
    background: url(../image/control/o2_span.png) no-repeat center;
    width: 200px;
    height: 150px;
    float: left;
    margin-left: 30px;
}
.co2_span{
    background: url(../image/control/co2_span.png) no-repeat center;
    width: 200px;
    height: 150px;
    float: left;
    margin-left: 20px;
}
.ph_span{
  background: url(../image/control/ph.png) no-repeat center;
  width: 200px;
  height: 150px;
  float: left;
  margin-left: 20px;
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
.data{
    margin-top:3%;
}
.data_panel label{
    color: #58DFDF;
    font-size:25px;
}
.model_div{
    margin-top:26px;
    margin-right: 10px;
}
a{
  text-decoration: none;
}
.custom-switch{
  width: 70px;
  height: 25px;
  background-color: #42b983;
  margin-top: 95px;
}
/*.custom-span {
  margin-bottom: 68px;
}*/
.custom-switch-bottom{
  width: 70px;
  height: 25px;
  background-color: #42b983;
  margin-top: 72px;
}
</style>