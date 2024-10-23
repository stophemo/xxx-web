<template>
  <NavbarItem class="MemoView">
    <div class="-col-end-2 aria-disabled: z-30"></div>
  </NavbarItem>
</template>

<script setup lang="ts">
import NavbarItem from '@/components/NavBarItem.vue';
import { onMounted } from 'vue';
import MemoService from '@/api/memoService';

onMounted(() => {
  MemoService.get('admin');
});
</script>

<style scoped>
</style>
