<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";
import BasicLayout from "./layouts/BasicLayout.vue";

const route = useRoute();
const default_layout = "basic"
const isRouterAlive = true
console.log(route.meta.layout)
const layout = computed(() => {
  return (route.meta.layout || default_layout) + '-layout'
})
</script>

<template>
  <basic-layout/>
</template>

<style scoped>

</style>
