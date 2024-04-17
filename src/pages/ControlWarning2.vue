<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="html">
    <div class="background">
      <header-layout />
      <div class="control_equip">
        <div class="left">
          <div class="cbtn1">
            <h4 style="color:aliceblue;">设备控制</h4>
          </div>
          <div class="cbtn2">
            <h4 style="color:aqua;">预警处理</h4>
          </div>
          <div class="cbtn3">
            <h4 style="color:aliceblue;">数据采集</h4>
          </div>

        </div>

        <div class="right">
          <div class="up">
            <div class="year_month">
              <input type="text" class="year" id="year">
              <input type="text" class="month" id="month">
              <input type="text" class="day" id="day">
              <button class="query"></button>
            </div>
            <h1>预警发送至&nbsp;&nbsp;</h1>
            <div class="sentEmail">
              <input type="text" class="email" id="email" placeholder="请输入邮箱">
              <button class="sent"></button>
            </div>
          </div>

          <br>

          <div class="down">

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
import {ref} from "vue";

const houseId = ref(1);

const queryHouse = (value : number) => {
  houseId.value = value;
};
</script>
<style scoped>

h1{
  color:#1296DB;
  font:30px lighter;
  float: left;
  margin-left: 180px;
  margin-top: 10px;
}
.query{
  width: 40px;
  height: 60px;
  background: url(../image/monitor/query.png) no-repeat;

}
.sent{
  width: 40px;
  height: 60px;
  background: url(../image/control/sent.png) no-repeat center;

}
.sentEmail{
  float: right;
  margin-right: 20%;
}
.sentEmail input{
  width: 300px;
  height: 60px;
  margin-right: 20px;
  float: left;
  background: #00040C;
  border-radius: 10px;
  border: #1296DB 4px solid;
  font-size:30px;
  text-align: center;
}
.year_month{
  float: left;
  margin-left: 2%;
}
.year_month input{
  width: 160px;
  height: 60px;
  margin-right: 20px;
  float: left;
  background: #00040C;
  border-radius: 10px;
  border: #1296DB 4px solid;
  font-size:30px;
  text-align: center;

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
}
.background{
  margin: auto;
  position: relative;
  top:0;
  width:2200px;
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
  margin-left: 20%;
  float: left;
}
.cbtn1{
  margin-top:20% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong01.png) no-repeat center;

}
.cbtn2{
  margin-top:20% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong02.png) no-repeat center;

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
.changeBigbutton{
  height: 50px;
  background: url(../image/monitor/bigbutton.png) no-repeat;
  margin-left:350px;
  margin-top: 200px;

}
.up{
  margin-left: 5%;
  margin-top: 3%;

}

.down{
  margin-top:1%;
  margin-left: 4.5%;
  background: url(../image/control/warning_panel.png) center no-repeat;
  height:800px;
  width: 1450px;

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
</style>