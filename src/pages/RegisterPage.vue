<template>

  <div style="height: 60px">
  </div>
  <div style="display: flex; align-items: center; margin-bottom: 30px;;justify-content: center">
    <svg t="1710932672481" class="icon" viewBox="0 0 1024 1024" version="1.1"
         xmlns="" p-id="4275" width="50" height="50"><path d="M477.5936 623.4624s-106.3936 94.72-281.3952 20.1216-159.2832-255.0272-9.984-278.1184c149.248-23.0912 203.5712 44.7488 203.5712 44.7488s-85.3504-214.4256 75.2128-303.616c35.4304-19.712 78.08-19.5072 113.0496 1.1264 153.4976 90.624 77.4144 303.2576 77.4144 303.2576s87.1424-84.2752 229.9904-35.072c62.8736 23.8592 116.4288 99.1744 33.5872 195.3792s-262.8096 137.9328-363.52 53.7088c31.4368-69.3248 152.832-178.944 305.664-183.4496-120.0128 1.4848-214.272 5.9904-310.6816 109.6192-22.8352-107.3664-38.5536-290.048-27.8528-342.9888-22.8352 175.2576-24.9856 346.0096-24.9856 346.0096S410.4704 429.568 170.496 446.0032c139.9808 18.6368 270.6432 76.032 307.0976 177.4592zM156.2624 869.9904c-14.08-5.2736-17.152-23.8592-5.3248-33.1776 52.4288-41.3184 172.2368-128.1536 230.656-108.3904 76.0832 25.7024 121.9072-73.8304 220.3648-14.5408s106.24 2.6112 158.464 66.7136c28.7232 35.2768 51.5584 53.2992 74.496 64.4096 16.4864 7.9872 14.2336 31.9488-3.5328 36.1984-139.776 33.4336-431.4624 79.7184-675.1232-11.2128z" fill="#8DD835" p-id="4276"></path></svg>
    <span style="margin-left: 10px; font-size: 30px">智能温室种植平台</span>
  </div>

  <div style="display: flex; justify-content: center;">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="register-tab" tab="账号密码注册"></a-tab-pane>
    </a-tabs>
  </div>

  <a-form
      :model="formState"
      name="normal_register"
      class="register-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
  >
    <a-form-item
        name="userAccount"
        :rules="[{ required: true, message: '请输入账号' }]"
    >
      <a-input v-model:value="formState.userAccount" placeholder="请输入账号">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
        name="userPassword"
        :rules="[{ required: true, message: '请输入密码' }]"
    >
      <a-input-password v-model:value="formState.userPassword" placeholder="请输入密码">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item
        name="checkPassword"
        :rules="[{ required: true, message: '请输入密码' }]"
    >
      <a-input-password v-model:value="formState.checkPassword" placeholder="请重新输入密码">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item style="text-align: left">
      <router-link to="/login">已有账号？去登录</router-link>
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit" class="register-form-button" style="width: 290px; height: 35px">
        注册
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import {reactive, ref} from 'vue';
import {LockOutlined, UserOutlined} from '@ant-design/icons-vue';
import myAxios from "@/plugins/myAxios";
import {message} from "ant-design-vue";
import {useRouter} from "vue-router";

const router = useRouter();
interface FormState {
  userAccount: string;
  userPassword: string;
  checkPassword: string;
}
const formState = reactive<FormState>({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
});

const activeKey = ref('register-tab');

const onFinish = async (values: any) => {
  const res : any = await myAxios.post('/user/register', {
    userAccount: values.userAccount,
    userPassword: values.userPassword,
    checkPassword: values.checkPassword
  });
  if (res.code === 0) {
    message.success('注册成功！');
    router.push({
      path: '/login',
    });
  } else {
    message.error('注册失败' + `${res.message ? `, ${res.message}` : ''}`);
    registerFailed();
  }
};

function registerFailed() {
  // 在注册失败后重置输入框的值为空
  formState.userAccount = '';
  formState.userPassword = '';
  formState.checkPassword = '';
}

const onFinishFailed = (errorInfo: any) => {
  console.log('登录失败');
};

</script>
<style scoped>
#components-form-demo-normal-register .register-form {
  max-width: 300px;
}
#components-form-demo-normal-register .register-form-forgot {
  float: right;
}
#components-form-demo-normal-register .register-form-button {
  width: 100%;
}
.register-form {
  height: 400px;
  width: 350px;
  margin: 0px auto;
}
</style>
