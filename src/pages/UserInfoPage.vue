<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="html">
    <div class="background">
      <header-layout />
      <div class="User_message">
        <div class="left">
          <div class="userbtn1">
            <router-link to="/user">
              <h4 style="color:aliceblue;">个人信息</h4>
            </router-link>
          </div>
          <div class="userbtn2">
            <router-link to="/user_info">
              <h4 style="color:aqua;">信息通知</h4>
            </router-link>
          </div>

        </div>
        <div class="right">
          <div class="message_panel">
            <!--这里的选择框allChecked样式需要改一下，改成无背景色，边框为白色，圆角-->
            <input type="checkbox" class="allChecked">
            <label class="text_all">全选</label>

<!--
            <div style="display: flex; flex-direction: row">
              <a-checkbox class="allChecked" v-model:checked="checked">Checkbox</a-checkbox>
            </div>
-->

            <div class="alert_span">
              <div class="message_context">
                <span class="alert_title">系统通知</span>
                <h2 class="message_text">系统将于2024-04-08  15：00进行维护。</h2>
              </div>
              <h2 class="message_day">2024-04-04</h2>
            </div>
            <div class="alert_span">
              <div class="message_context">
                <span class="alert_title">任务提醒</span>
                <h2 class="message_text">本次的西红柿种植计划即将完成，将于2024-04-02结束。</h2>
              </div>
              <h2 class="message_day">2024-04-01</h2>
            </div>
            <div class="alert_span">
              <div class="message_context">
                <span class="alert_title">安全提醒</span>
                <h2 class="message_text">当前账户在上海市于2024-03-26 17：56登录，如非本人操作请及时修改密码。</h2>
              </div>
              <h2 class="message_day">2024-03-26</h2>
            </div>
            <div class="alert_span">
              <div class="message_context">
                <span class="alert_title">安全提醒</span>
                <h2 class="message_text">当前账户在上海市于2024-03-26 17：56登录，如非本人操作请及时修改密码。</h2>
              </div>
              <h2 class="message_day">2024-03-26</h2>
            </div>
          </div>
          <button class="del_button">删除</button>


        </div>
      </div>

    </div>
  </div>


</template>
<script setup lang="ts">
import HeaderLayout from "@/layouts/HeaderLayout.vue";
import {ref} from "vue";

const checked = ref(false);

</script>
<style scoped>
.del_button{
  float: right;
  width: 110px;
  height: 60px;
  border-radius: 15px;
  background-color: #2A8F31;
  font:30px lighter;
  margin-right: 375px;
  margin-top: 12px
}
.message_context{
  margin-top:25px;
  width:1125px;
  height: 150px;
  float: left;
}
.message_day{
  float: left;
  margin-top:60px;
  font:25px lighter;
}
.message_text{
  font: 25px lighter;
  color: #fff;
  margin-top:20px;
  margin-left:30px;

}
.alert_title{
  font:30px lighter;
  color:aqua;
  margin-left: 30px;
}
.alert_span{
  background: url(../image/user/alert_span.png) center no-repeat;
  width: 1300px;
  height: 150px;
  float: left;
  margin-left: 50px;
  margin-top:10px;
}
.text_all{
  font:30px lighter;
  margin-left:10px;
  float: left;
  margin-top :70px

}
.allChecked{
  width: 50px;
  height: 50px;

  float: left;
  margin-top:60px;
  margin-left:60px;
}

.message_panel{
  background: url(../image/user/message_panel.png) no-repeat center;
  width: 1400px;
  height: 800px;
  margin-top:20px
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
  height: 100%;
  width: 100%;
  position: fixed;
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
  margin-left: 23%;
  float: left;
}
.userbtn1{
  margin-top:20% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong01.png) no-repeat center;

}
.userbtn2{
  margin-top:15% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong02.png) no-repeat center;

}
h4{
  font:35px lighter;
  text-align: center;
  padding-top:22px ;
}
a{
  text-decoration: none;
}

</style>