<template>

  <video width="100%" controls class="monitor-video">
    <source src="https://prod-streaming-video-msn-com.akamaized.net/6f18a83a-8d2a-4d01-b007-64fa411ea296/b619cc27-1c33-4d13-8488-d025aeaa7a8c.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</template>

<script setup lang="ts">

</script>

<style scoped>

.monitor-video{
  height: 500px;
  width: 870px;
}

#progressBar {
  width: 100%;
  background-color: #f2f2f2;
}

#progress {
  height: 10px;
  background-color: #4CAF50;
  width: 0;
}

#myVideo{
  width: 100%;
  height: 100%;
}

</style>