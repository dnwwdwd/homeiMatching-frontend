<template>
  <van-search v-model="searchText" placeholder="搜索附近用户" @search="onSearch"/>
  <van-cell center title="心动模式">
    <template #right-icon>
      <van-switch v-model="isMatchMode" size="24" />
    </template>
  </van-cell>

  <user-card-list :user-list="userList" :loading="loading"/>
  <van-empty v-if="!userList || userList.length < 1" description="数据为空" />
</template>

<script setup lang="ts">
import {ref, watchEffect} from "vue";
import {useRoute} from "vue-router";

import myAxios from "../plugins/myAxios.ts";
import UserCardList from "../components/UserCardList.vue";
import {UserType} from "../models/user"

const route = useRoute();
const { tags } = route.query;
const searchText = ref('');
const userList = ref([]);
const isMatchMode = ref<boolean>(false);
const loading = ref(true);

/**
 * 加载数据
 */
const loadData = async () => {
  let userListData;
  loading.value = true;
  //心动模式
  if (isMatchMode.value){
    const  num = 10;
    userListData = await myAxios.get('user/match',{
      params: {
        num,
      },
    })
        .then(function (response) {
          console.log('/user/match succeed',response);
          return response?.data;
        })
        .catch(function (error) {
          console.log('/user/match error',error);
        });
  }else {
    //普通用户使用分页查询
    userListData = await  myAxios.get('/user/recommend',{
      params: {
        pageSize: 8,
        pageNum: 1,
      },
    })
        .then(function (response) {
          console.log('/user/recommend succeed', response);
          return response?.data?.records;
        })
        .catch(function (error) {
          console.log('/user/recommends error',error);
        });

  }
  if (userListData){
    userListData.forEach((user: UserType) =>{
      if (user.tags){
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
  loading.value = false;
}

watchEffect(() =>{
  loadData();
})


</script>

<style scoped>

</style>