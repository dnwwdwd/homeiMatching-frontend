<template>
  <van-skeleton title avatar :row="3" :loading="loading" v-for="user in userList">
  <van-card
      :desc="user.profile"
      :title="`${user.username}(${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini" @click="showInfoDialog(user)">联系我</van-button>
    </template>

  </van-card>

  </van-skeleton>

  <van-dialog v-model:show="showDialog" title="你好啊" show-cancel-button>
    <van-contact-card  type="edit" name="user.username" tel="user.phone" :editable="false" />
  </van-dialog>

</template>

  <script setup lang="ts">
  import {UserType} from "../models/user";
  import {ref} from "vue";

  const showDialog = ref(false);
  const clickedUser = ref();

  interface UserCardListProps{
    loading: boolean
    userList: UserType[];
  }
  withDefaults(defineProps<UserCardListProps>(), {
    loading: true,
  })

  const showInfoDialog = (user: UserType) => {
    showDialog.value = true;
    clickedUser.value= user;
  }

  </script>

  <style scoped>

  </style>