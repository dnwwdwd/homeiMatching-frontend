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
      <van-button size="mini" @click="toIntroUser(user.id, user.avatarUrl, user.username, user.profile, user.phone, user.gender, user.email)">联系我</van-button>
    </template>
  </van-card>
  </van-skeleton>

</template>

  <script setup lang="ts">
  import {UserType} from "../models/user";
  import {useRouter} from "vue-router";

  const router = useRouter();

  interface UserCardListProps{
    loading: boolean
    userList: UserType[];
  }
  withDefaults(defineProps<UserCardListProps>(), {
    loading: true,
  })

  const toIntroUser = (id: number, avatarUrl: string, username: string,
                       profile: string, phone: string, gender: number, email: string) => {
    const userInfoParam = {
      id: id,
      avatarUrl: avatarUrl,
      username: username,
      profile: profile,
      phone: phone,
      gender: gender,
      email: email
    }
    router.push({
      path: '/user/intro',
      query: {
        userInfoParam: JSON.stringify(userInfoParam)
      }
    });
    console.log(userInfoParam);
  }

  </script>

  <style scoped>

  </style>