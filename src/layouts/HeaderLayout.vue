<template>
  <header>
    <div class="buttons left-buttons">
      <router-link to="/">
        <div class="button1">首页</div>
      </router-link>

      <router-link to="/monitor">
        <div class="button2">监控</div>
      </router-link>

      <router-link to="/control">
        <div class="button1">控制管理</div>
      </router-link>
    </div>

    <div class="buttons right-buttons">
      <router-link to="/plan">
        <div class="button1">生长计划</div>
      </router-link>

      <router-link to="/sale_chart">
        <div class="button2">销售</div>
      </router-link>

      <router-link to="/user">
        <div class="button1">个人中心</div>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  background: url(../image/title.png) no-repeat center;
  height: 10%; /* 将高度设置为自动，根据内容自动调整高度 */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.buttons {
  display: flex;
}

.left-buttons {
  margin-left: 15%;
  margin-top: 52px;
}

.right-buttons {
  margin-right: 15%;
  margin-top: 52px;
}
a{
  text-decoration: none;
}
.button1, .button2 {
  width: 160px;
  height: 50px;
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: Arial, sans-serif;
}

.button1:hover, .button2:hover {
  opacity: 0.8;
}

.button1 {
  background: url(../image/button1.png) no-repeat center;
  color: white;
}

.button2 {
  background: url(../image/button2.png) no-repeat center;
  color: white;
}
</style>
<script setup lang="ts">
</script>