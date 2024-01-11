<template>
  <div v-if="user">
    <van-cell title="当前登录用户" :value="user?.username"/>
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="我创建的队伍" is-link to="/user/team/create" />
    <van-cell title="我加入的队伍" is-link to="/user/team/join" />
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";

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


</script>
<style scoped>

</style>