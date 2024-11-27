<template>
  <div
    v-if="!props.editFlag"
    class="relative bg-gradient-to-r from-gray-100 to-gray-50 shadow-lg rounded-lg px-4 pb-4 pt-2 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border border-gray-200"
  >
    <div
      class="absolute top-2 right-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-xs font-medium px-3 py-1 rounded-lg shadow-sm opacity-90 hover:opacity-100 transition-all duration-300 animate-pulse"
    >
      {{ props.memo.tag }}
    </div>
    <div v-if="props.editFlag" class="absolute left-2 top-2 size-3 flex">
      <el-checkbox :key="props.memo.id" :value="props.memo.id" class="size-full" />
    </div>
    <div v-if="props.editFlag" class="h-4"></div>
    <h3 class="text-lg font-semibold text-gray-800 truncate">{{ props.memo.title }}</h3>
    <p class="text-sm text-gray-500 mt-2 line-clamp-3">{{ props.memo.content }}</p>
  </div>

  <div
    v-if="props.editFlag"
    class="relative bg-gradient-to-r from-gray-100 to-gray-50 shadow-lg rounded-lg px-4 pb-4 pt-2 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border border-gray-200"
  >
    <div
      class="absolute top-2 right-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-xs font-medium px-3 py-1 rounded-lg shadow-sm opacity-90 hover:opacity-100 transition-all duration-300 animate-pulse"
    >
      {{ props.memo.tag }}
    </div>
    <div class="absolute left-2 top-2 size-3 flex">
      <el-checkbox :key="props.memo.id" :value="props.memo.id" class="size-full" />
    </div>
    <div class="h-4"></div>
    <h3 class="text-lg font-semibold text-gray-800 truncate">{{ props.memo.title }}</h3>
    <p class="text-sm text-gray-500 mt-2 line-clamp-3">{{ props.memo.content }}</p>
  </div>
</template>

<script setup lang="ts">
interface MemoCardProps {
  memo: {
    id: string
    tag: string
    title: string
    content: string
  }
  editFlag: boolean
}

const props = defineProps<MemoCardProps>()
</script>

<style scoped>
/* 限制文字行数 */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
}

/* 确保点击区域透明，但响应事件 */
.cursor-pointer {
  background: transparent;
}
</style>
