<template>
  <ContentLayout>
    <div class="memo-container rounded-lg border border-gray-200">
      <div v-if="!editFlag" class="memo-tab h-12 flex justify-between items-center sticky top-0 z-30 bg-[#f7f7f7]">
        <IconMenu class="px-4" />
        <div class="right flex px-4 relative">
          <IconSearch class="mr-3" />
          <IconThreePoint @click="threePointMenuFlag = !threePointMenuFlag" v-click-outside="closeDropdown" />
          <ul v-if="threePointMenuFlag" class="absolute right-0 top-8 border rounded-lg bg-white cursor-pointer">
            <li class="px-5 py-2 font-thin text-[14px]" @click="openEdit">编辑</li>
            <li class="px-5 py-2 font-thin text-[14px]">查看</li>
          </ul>
        </div>
      </div>
      <div v-if="editFlag" class="memo-tab h-12 flex justify-between items-center sticky top-0 z-30 bg-[#f7f7f7]">
        <el-checkbox
          class="p-4"
          v-model="checkAll"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange"
        >
          全选
        </el-checkbox>

        <div class="iconfont delete size-4" />
        <IconClose class="mr-4 cursor-pointer" @click="closeEdit" />
      </div>

      <div class="memo-list px-4 pt-5 h-screen overflow-auto" @scroll="debouncedHandleScroll">
        <!-- 卡片列表 -->
        <el-checkbox-group class="grid grid-cols-3 gap-4" v-model="checkedCards" @change="handleCheckedCardsChange">
          <MemoCard
            v-for="memo in memos"
            :key="memo.id"
            :memo="memo"
            :editFlag="editFlag"
          />
        </el-checkbox-group>

        <!-- 加载中提示 -->
        <div v-if="isLoading" class="text-center mt-4 text-gray-500">正在加载中...</div>

        <!-- 滚动到顶部按钮 -->
        <button
          v-if="showScrollTopButton"
          @click="scrollToTop"
          class="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          ↑
        </button>
      </div>
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
import IconMenu from '@/components/icons/IconMenu.vue'
import { debounce } from 'lodash'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconThreePoint from '@/components/icons/IconThreePoint.vue'
import IconClose from '@/components/icons/IconClose.vue'

// 状态管理
const memos = ref<MemoQueryResult[]>([]) // 已加载的备忘录
const isLoading = ref(false) // 是否正在加载
const isPreloading = ref(false) // 是否正在预加载下一页数据
const pageNumber = ref(1) // 当前页码
const pageSize = 10 // 每页条数
const totalPage = ref(1) // 总页数
const userStore = useUserStore()
let preloadedData: MemoQueryResult[] = [] // 存储预加载数据
const showScrollTopButton = ref<boolean>(false) // 是否显示滚动到顶部按钮
const threePointMenuFlag = ref<boolean>(false)
const editFlag = ref<boolean>(false)
const checkedCards = ref<string[]>([])
const isIndeterminate = ref(false)
const checkAll = ref(false)

// 编辑  全选处理
const openEdit = () => {
  editFlag.value = true
}
const closeEdit = () => {
  editFlag.value = false
  checkedCards.value = []
  checkAll.value = false
}
const handleCheckAllChange = (val: boolean) => {
  checkedCards.value = val ? memos.value.map(memo => memo.id) : []
  isIndeterminate.value = false
  checkAll.value = checkedCards.value.length === memos.value.length
}
const handleCheckedCardsChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === memos.value.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < memos.value.length
}

// 三点菜单关闭
const closeDropdown = () => {
  threePointMenuFlag.value = false
}

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
const debouncedHandleScroll = debounce(handleScroll, 200)

// 加载当前页数据
const loadMore = async () => {
  if (isLoading.value) return
  isLoading.value = true

  MemoService.queryMemo({
    pageNumber: pageNumber.value,
    pageSize,
    filter: {
      username: userStore.userInfo?.name ?? ''
    }
  })
    .then((result: PageResult<MemoQueryResult>) => {
      totalPage.value = result.totalPage
      memos.value.push(...result.list)
      preloadNextPage() // 加载下一页数据
    })
    .catch(error => {
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
      username: userStore.userInfo?.name ?? ''
    }
  })
    .then((result: PageResult<MemoQueryResult>) => {
      preloadedData = result.list // 缓存数据
    })
    .catch(error => {
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
