<script setup lang="ts">
import {VideoType} from "@/models/video";

interface VideoListProps{
  videoList: VideoType;
}

defineProps<VideoListProps>();

</script>

<template>
  <a-row :gutter="18">
    <a-col :xs="24" v-for="video in videoList" :sm="12" :md="8" :lg="8" :xl="8"
           style="margin-bottom: 50px; height: 300px; width: 400px">
      <a-card :title="video.createTime">
        <video width="100%" controls>
          <source :src="video.url" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </a-card>
    </a-col>
  </a-row>

<!--  <a-row :gutter="18">
    <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"style="margin-bottom: 50px; height: 300px; width: 400px">
      <a-card title="历史监控">
        <video width="100%" controls>
          <source src="https://prod-streaming-video-msn-com.akamaized.net/6f18a83a-8d2a-4d01-b007-64fa411ea296/b619cc27-1c33-4d13-8488-d025aeaa7a8c.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </a-card>
    </a-col>
  </a-row>-->
</template>

<style scoped>

</style>