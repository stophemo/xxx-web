<template>
  <h1>this is a about view</h1>
  <el-checkbox
    class="px-4"
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isIndeterminate = ref(false)
const checkAll = ref(false)
const handleCheckAllChange = (val: boolean) => {
  console.log('全选Val:', val)
  isIndeterminate.value = false
}
</script>

<style scoped></style>
