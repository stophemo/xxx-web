<template>
  <ContentLayout>
    <div
      class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end mb-4 p-4"
      :style="{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${getAssetsImg('episode-1')})`
      }"
    >
      <h1
        class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center"
      >
        Life Episodes
      </h1>
      <label class="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
        <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
          <div
            class="text-neutral-500 flex border border-[#dbdbdb] bg-neutral-50 items-center justify-center pl-[15px] rounded-l-xl border-r-0"
            data-icon="MagnifyingGlass"
            data-size="20px"
            data-weight="regular"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
              ></path>
            </svg>
          </div>
          <input
            placeholder="Share your life clips"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] h-full placeholder:text-neutral-500 px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
            value=""
          />
          <div class="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dbdbdb] bg-neutral-50 pr-[7px]">
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#cccccc] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            >
              <span class="truncate">Post</span>
            </button>
          </div>
        </div>
      </label>
    </div>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 py-4">
      <div class="flex flex-col gap-3">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" :style="{ backgroundImage: `url(${getAssetsImg('episode-2')})` }"></div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" :style="{ backgroundImage: `url(${getAssetsImg('episode-3')})` }"></div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" :style="{ backgroundImage: `url(${getAssetsImg('episode-4')})` }"></div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" :style="{ backgroundImage: `url(${getAssetsImg('episode-5')})` }"></div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" :style="{ backgroundImage: `url(${getAssetsImg('episode-6')})` }"></div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" :style="{ backgroundImage: `url(${getAssetsImg('episode-7')})` }"></div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" :style="{ backgroundImage: `url(${getAssetsImg('episode-8')})` }"></div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" :style="{ backgroundImage: `url(${getAssetsImg('episode-9')})` }"></div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" :style="{ backgroundImage: `url(${getAssetsImg('episode-10')})` }"></div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" :style="{ backgroundImage: `url(${getAssetsImg('episode-11')})` }"></div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" :style="{ backgroundImage: `url(${getAssetsImg('episode-12')})` }"></div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" :style="{ backgroundImage: `url(${getAssetsImg('episode-13')})` }"></div>
      </div>
    </div>
    <div class="flex items-center justify-center py-4">
      <el-pagination :page-size="15" :pager-count="5" layout="prev, pager, next" :total="60" :hide-on-single-page="true" />
    </div>
  </ContentLayout>
</template>

<script setup lang="ts">
import { getAssetsImg } from '@/util/utils'
import ContentLayout from '@/layouts/ContentLayout.vue'
</script>

<style scoped></style>
