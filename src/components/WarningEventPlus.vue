<template>

  <label for="shebeiwanhaolv" style="margin-right: 10px; color: white;">设备完好率</label>
  <img id="shebeiwanhaolv" src="../icon/消防栓%20(1).png" style="width: 40px">

  <label for="broken-num" style="margin-right: 10px; color: white;">故障</label>
  <img id="broken-num" src="../icon/故障.png" width="45px">

  <label for="warn-num" style="color: white; margin-right: 10px;">预警</label>
  <img id="warn-num" src="../icon/库存预警.png" width="40px">

  <label for="solve-percent" style="margin-right: 10px; color: white;">告警处置率</label>
  <img id="solve-percent" src="../icon/列表清单.png" width="40px" />

  <a-space direction="vertical" style="width: 380px; margin: 0px 24px;" v-for="warn in warnList" size="small">
    <a-alert
        style="height: 80px; background-color: #E6F4FF; margin-top: 3px"
        :description="warn.description"
        type="error"
        show-icon
    />
  </a-space>

</template>

<script setup lang="ts">
import {WarningType} from "@/models/warning";

interface WarnEventListProps{
  warnList: WarningType;
}

defineProps<WarnEventListProps>();

</script>


<style scoped>

</style>