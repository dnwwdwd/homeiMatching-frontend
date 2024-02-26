<template>
  <p>你好</p>
  <div style="position: fixed; bottom: 50px; width: 100%; padding: 10px; background-color: #fff;">
    <van-form @submit="sendMsg()" style="display: flex; align-items: center;">
      <van-cell-group inset>
        <van-field
            v-model="message"
            name="消息"
            placeholder="发送消息"
            :rules="[{ required: false, message: '' }]"
            style="width: 2000px"
        />
      </van-cell-group>
      <div style="margin-right: 30px;">
        <van-button type="success" native-type="submit" style="width: 70px; height: 40px;">
          发送
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const message = ref('');


const sendMsg = () => {
  console.log(message.value);
};
</script>


<style scoped>


</style>