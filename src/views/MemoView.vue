<template>
  <ContentLayout>
    <div
      class="h-screen overflow-auto p-6 bg-gradient-to-b from-gray-100 via-white to-gray-50 shadow-xl rounded-lg border border-gray-200"
      @scroll="debouncedHandleScroll"
    >
      <!-- 卡片列表 -->
      <div class="grid grid-cols-3 gap-4">
        <MemoCard
          v-for="memo in memos"
          :key="memo.id"
          :tag="memo.tag"
          :title="memo.title"
          :content="memo.content"
        />
      </div>

      <!-- 加载中提示 -->
      <div v-if="isLoading" class="text-center mt-4 text-gray-500">正在加载中...</div>
    </div>
  </ContentLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MemoCard from '@/components/MemoCard.vue'
import type { PageResult } from '@/api/config/commonTypes'
import MemoService, { type MemoQueryResult } from '@/api/memoService'
import { useUserStore } from '@/stores/userStore'
import ContentLayout from '@/layouts/ContentLayout.vue'
import { debounce } from 'lodash'

// 状态管理
const memos = ref<MemoQueryResult[]>([]) // 已加载的备忘录
const isLoading = ref(false) // 是否正在加载
const isPreloading = ref(false) // 是否正在预加载下一页数据
const pageNumber = ref(1) // 当前页码
const pageSize = 21 // 每页条数
const totalPage = ref(1) // 总页数
const userStore = useUserStore()
let preloadedData: MemoQueryResult[] = [] // 存储预加载数据

// 滚动加载方法
const handleScroll = async (event: Event) => {
    const target = event.target as HTMLElement

    // 判断是否滚到底部
    if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
      if (preloadedData.length > 0) {
        // 如果有预加载数据，直接使用
        memos.value.push(...preloadedData)
        preloadedData = []
        pageNumber.value += 1
        await preloadNextPage() // 加载下下页
      } else if (!isLoading.value && pageNumber.value < totalPage.value) {
        // 如果没有预加载数据，加载当前页
        await loadMore()
      }
    }
}
// 包装为防抖函数
const debouncedHandleScroll = debounce(handleScroll, 200);

// 加载当前页数据
const loadMore = async () => {
  if (isLoading.value) return
  isLoading.value = true

  MemoService.queryMemo({
    pageNumber: pageNumber.value,
    pageSize,
    filter: {
      username: userStore.userInfo?.name ?? '',
    },
  })
    .then((result: PageResult<MemoQueryResult>) => {
      totalPage.value = result.totalPage
      memos.value.push(...result.list)
      preloadNextPage() // 加载下一页数据
    })
    .catch((error) => {
      console.error('加载失败', error)
    })
    .finally(() => {
      isLoading.value = false
    })
}

// 预加载下一页数据（严格控制）
const preloadNextPage = async () => {
  if (isPreloading.value || pageNumber.value >= totalPage.value) return
  isPreloading.value = true
  const nextPage = pageNumber.value + 1 // 确定预加载的页码
  console.log(`预加载第${nextPage}页数据`)

  MemoService.queryMemo({
    pageNumber: nextPage, // 预加载下一页
    pageSize,
    filter: {
      username: userStore.userInfo?.name ?? '',
    },
  })
    .then((result: PageResult<MemoQueryResult>) => {
      preloadedData = result.list // 缓存数据
    })
    .catch((error) => {
      console.error('预加载失败', error)
    })
    .finally(() => {
      isPreloading.value = false
    })
}

// 页面挂载时加载首屏数据
onMounted(async () => {
  await loadMore() // 加载第一页数据
})
</script>

