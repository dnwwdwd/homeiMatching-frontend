<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="用户名"
          placeholder="请填写用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="请填写密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
          v-model="checkPassword"
          type="password"
          name="checkPassword"
          label="校验密码"
          placeholder="请再输入一次密码"
          :rules="[{ required: true, message: '请再输入一次密码' }]"
      />
      <van-field
        v-model="planetCode"
        type="text"
        name="planetCode"
        label="编号"
        placeholder="请填写编号"
        :rules="[{ required: true, message: '请填写编号' }]"
    />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        注册
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import myAxios from "../plugins/myAxios";
import {showToast} from "vant";

const router = useRouter();

const userAccount = ref('');
const userPassword = ref('');
const checkPassword = ref('');
const planetCode = ref('');

const onSubmit = async () => {
  const res = await myAxios.post('/user/register', {
    userAccount: userAccount.value,
    userPassword: userPassword.value,
    checkPassword: checkPassword.value,
    planetCode: planetCode.value,
  });
  if (res?.code === 0) {
    showToast("注册成功");
    router.push({
      path: '/'
    })
  } else {
    showToast("注册失败" + (res.description ? `, ${res.description}` : ''));
  }
}
</script>


<style scoped>

</style>