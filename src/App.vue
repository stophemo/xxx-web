<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import { onMounted } from 'vue';

// element主题色
const setVarStyle = (key:string,value:any,dom = document.documentElement) => {
  dom.style.setProperty(key, value)
}
onMounted(() => {
  setVarStyle('--el-color-primary', '#807870')
  // setVarStyle('--el-color-primary-light-9', '#A3998F')
  // setVarStyle('--el-color-primary-light-3', '#A3998F')
})
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped></style>
