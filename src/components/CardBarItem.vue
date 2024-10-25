<template>
  <div class="flex flex-col gap-3 pb-3">
    <div
      class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div>
      <p class="text-[#141414] text-base font-medium leading-normal">{{ title }}</p>
      <p class="text-neutral-500 text-sm font-normal leading-normal">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    imageUrl: String,
    title: String,
    description: String,
  });

</script>

<style scoped></style>
