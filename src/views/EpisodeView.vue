<template>
  <section class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div class="@container">
        <div class="@[480px]:p-4">
          <div
            class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/0e240d15-3d9f-4a5d-98db-77c5d0c48a75.png");'
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
        </div>
      </div>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/sdxl10/59981070-b14f-4c4a-8695-f70073dc79b7.png");'
          ></div>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/sdxl10/3211de58-4092-41a4-9cb9-be62b2cd00cb.png");'
          ></div>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/sdxl10/83ad1484-62c3-4313-afde-92b0b5418c7c.png");'
          ></div>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/stability/5a7433c8-7594-440f-8b3c-8937bccc11fe.png");'
          ></div>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/sdxl10/69c3cf5a-bb0a-47d8-8665-bf0b2cd4545d.png");'
          ></div>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/stability/68478713-9592-4908-a047-f8da939c3051.png");'
          ></div>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/sdxl10/ddb647d3-ea92-4db0-980c-2bfa9533de73.png");'
          ></div>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/sdxl10/99636822-c79b-4860-b2f3-c9d470c5de09.png");'
          ></div>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/sdxl10/d68de8b9-0c31-4697-b79f-6cba64f29c1e.png");'
          ></div>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/sdxl10/c601180b-b933-4641-855b-3fc6c4988418.png");'
          ></div>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/sdxl10/61a6b93f-2ecb-41a7-9068-39d7489c95c4.png");'
          ></div>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/sdxl10/7c797b6d-a70b-44d2-b2a7-627f2c828d72.png");'
          ></div>
        </div>
      </div>
      <div class="flex items-center justify-center p-4">
        <el-pagination
          :page-size="15"
          :pager-count="5"
          layout="prev, pager, next"
          :total="60"
          :hide-on-single-page="true"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
