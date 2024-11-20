<template>
  <ContentLayout>
    <div
      class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end mb-4 p-4"
      :style="{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${getAssetsImg('home-1')})`
      }"
    >
      <div class="flex flex-col gap-2 text-left">
        <h1
          class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
        >
          {{ home.title }}
        </h1>
        <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
          {{ home.content }}
        </h2>
      </div>
      <label class="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
        <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
          <div
            class="text-neutral-500 flex border border-[#dbdbdb] bg-neutral-50 items-center justify-center pl-[15px] rounded-l-xl border-r-0"
            data-icon="MagnifyingGlass"
            data-size="20px"
            data-weight="regular"
          >
            <Search class="w-5 h-5" />
          </div>
          <input
            placeholder="Search..."
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] h-full placeholder:text-neutral-500 px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
            value=""
          />
          <div class="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dbdbdb] bg-neutral-50 pr-[7px]">
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#cccccc] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            >
              <span class="truncate">Go</span>
            </button>
          </div>
        </div>
      </label>
    </div>
    <CardBar v-for="(item, index) in cardData" :key="index" :title="item.title" :items="item.cards" />
  </ContentLayout>
</template>

<script setup lang="ts">
import { getAssetsImg } from '@/util/utils'
import { ref } from 'vue'
import CardBar from '@/components/HomeCardBar.vue'
import { Search } from '@element-plus/icons-vue'
import ContentLayout from '@/layouts/ContentLayout.vue'

const home = ref({
  content:
    'I am a software engineer, YouTuber, and creator. This is my digital garden,where I grow ideas and share what I learn. Explore the site to see videos,blog posts, resources, and more!',
  title: "Hey, I'm Alex"
})

const cardData = ref([
  {
    title: 'Featured Content',
    cards: [
      {
        title: 'How to Learn Anything... Fast - Josh Kaufman',
        description: 'TED',
        imageUrl: getAssetsImg('home-2')
      },
      {
        title: 'How to Learn Anything... Fast - Josh Kaufman',
        description: 'TED',
        imageUrl: getAssetsImg('home-3')
      },
      {
        title: 'How to Learn Anything... Fast - Josh Kaufman',
        description: 'TED',
        imageUrl: getAssetsImg('home-4')
      },
      {
        title: 'How to Learn Anything... Fast - Josh Kaufman',
        description: 'TED',
        imageUrl: getAssetsImg('home-5')
      }
    ]
  },
  {
    title: 'Resources',
    cards: [
      {
        title: 'How to Learn Anything... Fast - Josh Kaufman',
        description: 'TED',
        imageUrl: getAssetsImg('home-6')
      },
      {
        title: 'How to Learn Anything... Fast - Josh Kaufman',
        description: 'TED',
        imageUrl: getAssetsImg('home-7')
      },
      {
        title: 'How to Learn Anything... Fast - Josh Kaufman',
        description: 'TED',
        imageUrl: getAssetsImg('home-8')
      },
      {
        title: 'How to Learn Anything... Fast - Josh Kaufman',
        description: 'TED',
        imageUrl: getAssetsImg('home-9')
      }
    ]
  },
  {
    title: 'Recent Posts',
    cards: [
      {
        title: 'How to Learn Anything... Fast - Josh Kaufman',
        description: 'TED',
        imageUrl: getAssetsImg('home-10')
      },
      {
        title: 'How to Learn Anything... Fast - Josh Kaufman',
        description: 'TED',
        imageUrl: getAssetsImg('home-11')
      },
      {
        title: 'How to Learn Anything... Fast - Josh Kaufman',
        description: 'TED',
        imageUrl: getAssetsImg('home-12')
      },
      {
        title: 'How to Learn Anything... Fast - Josh Kaufman',
        description: 'TED',
        imageUrl: getAssetsImg('home-13')
      }
    ]
  }
])
</script>

<style scoped></style>
