<template>
  <img src="../icon/消防栓%20(1).png" style="width: 40px">
  <img src="../icon/故障.png" width="45px">
  <img src="../icon/库存预警.png" width="40px">
  <img src="../icon/实验室监控.png" width="40px">
  <img src="../icon/设备设施.png" width="40px">
  <img src="../icon/列表清单.png" width="40px">
  <h4 style="margin-top: 8px">实时警讯</h4>


  <a-list class="warn-list" item-layout="horizontal" :data-source="props.warnList"
          style="width: 390px; margin: 0px 24px; color: royalblue">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta :description="item.description">
          <template #title>
            <a href="https://blog.hejiajun.icu/">{{ item.createTime }}</a>
          </template>
          <template #avatar>
            <a-avatar src="../icon/" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {defineProps, withDefaults} from "vue";

interface Props {
  warnList: any
}

const props = withDefaults(defineProps<Props>(), {
  warnList: () => [],
});

</script>

<style scoped>
.warn-list{
  background-color: white;
}
</style>