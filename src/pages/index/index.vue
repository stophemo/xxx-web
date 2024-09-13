<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view
    class="relative flex size-full min-h-screen flex-col bg-neutral-50 group-design-root overflow-x-hidden"
    style="font-family: 'Plus Jakarta Sans', 'Noto Sans', sans-serif"
  >
    <view class="layout-container flex h-full grow flex-col">
      <view class="px-40 flex flex-1 justify-center py-5">
        <view class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <!-- Banner Section -->
          <view class="container">
            <view
              class="bg-cover bg-center bg-no-repeat flex min-h-[480px] flex-col gap-6 items-start justify-end px-4 pb-10 rounded-xl"
              style="
                background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%),
                  url('https://cdn.usegalileo.ai/stability/b2661223-5658-41e6-989e-4cd6a558b1d3.png');
              "
            >
              <view class="flex flex-col gap-2 text-left">
                <text class="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  Hi, I'm Daniel. I'm a software engineer
                </text>
                <text class="text-white text-sm font-normal leading-normal">
                  I like to build things and share what I've learned. I'm passionate about web
                  development, machine learning, and data visualization.
                </text>
              </view>
              <view class="flex flex-col min-w-40 h-14 w-full max-w-[480px]">
                <view class="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <view
                    class="text-neutral-500 flex border bg-neutral-50 items-center justify-center pl-4 rounded-l-xl border-r-0"
                  >
                    <uni-icon type="search" size="20px" color="#141414"></uni-icon>
                  </view>
                  <input
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] border h-full"
                    placeholder="Search blog, projects, notes"
                  />
                  <view
                    class="flex items-center justify-center rounded-r-xl border-l-0 bg-neutral-50 pr-2"
                  >
                    <button
                      class="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 bg-[#cccccc] text-[#141414] text-sm font-bold"
                    >
                      Search
                    </button>
                  </view>
                </view>
              </view>
            </view>
          </view>

          <!-- Recent Clips Section -->
          <text
            class="text-[#141414"
            :class="'font-bold text-[22px] leading-tight tracking-[-0.015em] px-4 pb-3 pt-5'"
          >
            Recent Clips
          </text>

          <view class="clip-list">
            <view
              class="flex gap-4 bg-neutral-50 px-4 py-3"
              v-for="(clip, index) in clips"
              :key="index"
            >
              <view
                :style="'background-image: url(' + clip.image + ');'"
                class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
              ></view>
              <view class="flex flex-1 flex-col justify-center">
                <text class="text-[#141414] text-base font-medium">{{ clip.title }}</text>
                <text class="text-neutral-500 text-sm font-normal">{{ clip.description }}</text>
                <text class="text-neutral-500 text-sm font-normal">{{ clip.time }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import PLATFORM from '@/utils/platform'

interface Clip {
  title: string
  description: string
  time: string
  image: string
}

const clips: Clip[] = [
  {
    title: 'How Quora Works',
    description: 'Quora is a question-and-answer platform with a focus on user-generated content.',
    time: '2 days ago',
    image: 'https://cdn.usegalileo.ai/sdxl10/2ad49643-a3bd-4687-9aa8-0a0a455de09a.png',
  },
  {
    title: 'Build a Note-Taking App with Flask',
    description: 'Create a simple note-taking app using Flask and SQLite.',
    time: '3 days ago',
    image: 'https://cdn.usegalileo.ai/sdxl10/a64f01bd-197b-4754-8843-682c842e79eb.png',
  },
  {
    title: 'Web Scraping with Python',
    description: 'Learn the basics of web scraping with Python using Beautiful Soup.',
    time: '4 days ago',
    image: 'https://cdn.usegalileo.ai/sdxl10/3019b36b-4e7f-4956-b6c7-9937a3d0d277.png',
  },
]

defineOptions({
  name: 'Home',
})

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const author = ref('菲鸽')
const description = ref(
  'unibest 是一个集成了多种工具和技术的 uniapp 开发模板，由 uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI + VSCode 构建，模板具有代码提示、自动格式化、统一配置、代码片段等功能，并内置了许多常用的基本组件和基本功能，让你编写 uniapp 拥有 best 体验。',
)
// 测试 uni API 自动引入
onLoad(() => {
  console.log(author)
})
</script>

<style scoped>
.container {
  padding: 1rem;
}

.clip-list {
  padding-top: 1rem;
}

button {
  font-weight: bold;
  color: #141414;
  background-color: #cccccc;
}
</style>
