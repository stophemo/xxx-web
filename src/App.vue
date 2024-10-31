<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'

// element主题色
const setVarStyle = (key: string, value: any, dom = document.documentElement) => {
  dom.style.setProperty(key, value)
}
onMounted(() => {
  setVarStyle('--el-color-primary', '#5e5750')
  setVarStyle('--el-color-primary-light-9', '#9f948a')
  setVarStyle('--el-color-primary-light-3', '#fbe9d8')
})
</script>

<template>
  <router-view />
</template>

<style scoped></style>
