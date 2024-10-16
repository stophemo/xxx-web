<template>
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ededed] px-10 py-3">
    <div class="flex items-center gap-4 text-[#141414]">
      <WaveflagIcon />
      <h2 class="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">Home</h2>
    </div>

    <div class="flex flex-1 justify-end gap-8">
      <nav class="flex items-center gap-9">
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" to="/">Home</RouterLink>
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" to="/feed">Feed</RouterLink>
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" to="/memo">Memo</RouterLink>
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" to="/resources">Resources</RouterLink>
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" to="/about">About</RouterLink>
      </nav>
      <div class="flex gap-2">
        <SearchIcon />
        <GridIcon />
        <BellIcon />
      </div>
      <div
        class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
        style="background-image: url('https://cdn.usegalileo.ai/stability/aac48c19-c653-412e-b6d6-b016f17cfa88.png')"
      ></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import BellIcon from '@/components/icons/IconBell.vue';
import SearchIcon from '@/components/icons/IconSearch.vue';
import WaveflagIcon from '@/components/icons/IconWaveflag.vue';
import GridIcon from '@/components/icons/IconGrid.vue';
</script>

<style scoped>
</style>
