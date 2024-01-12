<template>
  <div v-if="user">
    <van-cell title="去登录" is-link to="/user/login" />
<!--    <van-cell title="注册" is-link to="/user/register" />-->
    <van-cell title="当前登录用户" :value="user?.username"/>
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="我创建的队伍" is-link to="/user/team/create" />
    <van-cell title="我加入的队伍" is-link to="/user/team/join" />
    <van-cell title="退出登录" @click="userLogout" />
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";
import myAxios from "../plugins/myAxios.ts";
import {showToast} from "vant";

const user = ref();

onMounted(async() => {
  user.value = await getCurrentUser();
  if (!user.value) {
    router.push({
      path: '/user/login'
    });
  }
});

const router = useRouter();

const userLogout = async () => {
  const res = await myAxios.post('/user/logout');
  if (res?.code === 0) {
    showToast("退出成功");
    router.push({
      path: '/'
    })
  } else {
    showToast("退出失败");
  }
}

</script>
<style scoped>

</style>