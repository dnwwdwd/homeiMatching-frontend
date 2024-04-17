<script setup lang="ts">
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
import { LikeOutlined } from '@ant-design/icons-vue';
</script>

<template>
  <div style="margin: 10px">
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card>
          <a-statistic
              title="销售上升"
              :value="11.28"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
          >
            <template #prefix>
              <arrow-up-outlined />
            </template>
          </a-statistic>
          <a-statistic title="销售额" :value="112893" style="margin-right: 50px; margin-top: 70px" />
          <a-statistic title="好评数" :value="1128" style="margin-right: 50px; margin-top: 74px">
            <template #suffix>
              <like-outlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card>
          <a-statistic
              title="好评率"
              :value="11.28"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
          >
            <template #prefix>
              <arrow-up-outlined />
            </template>
          </a-statistic>
          <a-statistic title="销量" :value="112893" style="margin-right: 50px; margin-top: 70px" />
          <a-statistic
              title="差评率"
              :value="11.28"
              :precision="2"
              suffix="%"
              style="margin-top: 74px"
              :value-style="{ color: '#cf1322' }"
          >
            <template #prefix>
              <arrow-down-outlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>

</style>