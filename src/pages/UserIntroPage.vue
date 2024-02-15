<template>
  <div v-if="userInfo" style="text-align: center;">
    <van-image
        round
        width="8rem"
        height="8rem"
        :src="userInfo.avatarUrl"
        style="margin-top: 20px; margin-bottom: 20px; box-shadow: 0 0 15px rgba(0, 0, 0, 0.4)"
    />
  </div>
    <van-cell title="昵称" :value="userInfo?.username" icon="user-o"/>
    <van-cell title="性别" :value="userInfo?.gender" icon="contact-o"/>
    <van-cell title="个人介绍" :value="userInfo?.profile" icon="comment-o"/>
    <van-cell title="联系方式" :value="userInfo?.phone" icon="phone-o"/>
    <van-cell title="邮箱" :value="userInfo?.email" icon="envelop-o"/>


  <div style="text-align: center; margin-top: 10px;">
    <van-button icon="plus" type="success" text="添加好友" size="normal" style="border-radius: 10px" @click="addFriend"/>
    <!--    <van-button icon="minus" type="primary" text="私聊" size="small"/>-->
  </div>

</template>

<script setup lang="ts">

import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showToast} from "vant";

const route = useRoute();
const { userInfoParam } = route.query;

const userInfo = ref(JSON.parse(userInfoParam));

const addFriend = async () => {
  const res = await myAxios.post('/friend/add', {
    friendId: userInfo.value.id
  });
  if (res?.code === 0) {
    showToast('添加成功');
  } else {
    showToast('添加失败');
  }
};

</script>



<style scoped>

</style>