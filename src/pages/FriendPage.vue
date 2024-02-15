<template>
  <van-skeleton title avatar :row="3" :loading="loading" v-for="friend in friendList">
    <van-card
        :desc="friend.profile"
        :title="`${friend.friendname}(${friend.planetCode})`"
        :thumb="friend.avatarUrl"
    >
      <template #tags>
        <van-tag plain type="danger" v-for="tag in friend.tags" style="margin-right: 8px; margin-top: 8px">
          {{ tag }}
        </van-tag>
      </template>
      <template #footer>
        <van-button size="mini" @click="toChat(friend)">聊天</van-button>
      </template>
    </van-card>
  </van-skeleton>
</template>

<script setup lang="ts">

import {onMounted} from "vue";

onMounted() {

};
const toChat = () => {

};

</script>


<style scoped>

</style>