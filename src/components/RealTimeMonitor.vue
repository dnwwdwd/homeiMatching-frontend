<script setup lang="ts">
import {ref} from "vue";
import {message} from "ant-design-vue";

interface VideoUrlType{
  videoUrl: string;
}

const props = defineProps<VideoUrlType>();

const videoUrl = ref<string>(props.videoUrl || '');

const up = () => {
  message.success('监控上移成功');
};

const down = () => {
  message.success('监控下移成功');
};

const left = () => {
  message.success('监控左移成功');
};

const right = () => {
  message.success('监控右移成功');
};


</script>

<template>
  <video width="100%" controls style="width: 800px; height: 500px; margin-right: 600px; margin-top: 50px">
    <source :src="videoUrl" type="video/mp4" >
    Your browser does not support the video tag.
  </video>

  <div class="direction-container">
    <img src="../image/up.png" alt="Up" class="up" @click="up"/>
    <img src="../image/down.png" alt="Down" class="down" @click="down"/>
    <img src="../image/left.png" alt="Left" class="left" @click="left"/>
    <img src="../image/right.png" alt="Right" class="right" @click="right"/>
  </div>

</template>

<style scoped>
.direction-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin-left: 1000px;
}
.direction-container img {
  position: absolute;
  width: 50px;
  height: 50px;
}
.up {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.down {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.left {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.right {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
</style>