<template>
  <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <div id="cotent" style="padding-bottom: 50px">
    <router-view/>
  </div>
<!--  <router-link to="/">Go to Home</router-link>
  <router-link to="/team">Go to Team</router-link>-->

  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/friend" icon="friends-o" name="friend">好友</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">用户</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router';
import {ref} from "vue";
import routes from "../config/route.ts";

  const router = useRouter()
  const route = useRoute();

  const DEFAULT_TITLE = "homie匹配";
  const title = ref(DEFAULT_TITLE);


  /**
   * 根据路由切换标题
   */
  router.beforeEach((to, from) => {
    const toPath = to.path;
    routes.find((route) => {
      return toPath == route.path;
    })
    title.value = route?.title ?? DEFAULT_TITLE;
  })

  const onClickLeft = () => {
    router.back();
  }
  const onClickRight = () => {
    router.push('/search');
  };
  const onChange = () => {
  }

</script>
<style scoped>

</style>