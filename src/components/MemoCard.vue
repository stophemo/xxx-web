<template>
  <div
    class="relative bg-gradient-to-r from-gray-100 to-gray-50 shadow-lg rounded-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border border-gray-200"
  >
    <!-- 标签 -->
    <div
      class="absolute top-2 right-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-xs font-medium px-3 py-1 rounded-lg shadow-sm opacity-90 hover:opacity-100 transition-all duration-300 animate-pulse"
    >
      {{ tag }}
    </div>

    <!-- 标题 -->
    <h3 class="text-lg font-semibold text-gray-800 truncate">{{ title }}</h3>

    <!-- 内容 -->
    <p class="text-sm text-gray-500 mt-2 line-clamp-3">{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
interface MemoCardProps {
  tag: string;
  title: string;
  content: string;
}

// Props 传入标题和内容
defineProps<MemoCardProps>();
</script>

<style scoped>
/* 限制文字行数 */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
}
</style>
