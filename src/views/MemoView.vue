<template>
  <div class="-col-end-2 aria-disabled: z-30">
    <el-button type="primary">Add</el-button>
    <h1>this is memo view</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import MemoService from '@/api/memoService'

onMounted(() => {
  MemoService.get('admin')
})
</script>

<style scoped></style>
