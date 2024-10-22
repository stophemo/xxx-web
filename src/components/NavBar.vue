<template>
  <header
    class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ededed] px-10 py-3"
  >
    <div class="flex items-center gap-4 text-[#141414]">
      <WaveflagIcon />
      <h2 class="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">Home</h2>
    </div>

    <div class="flex flex-1 justify-end gap-8">
      <nav class="flex items-center gap-9">
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" to="/">Home</RouterLink>
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" to="/episode">Episode</RouterLink>
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
        class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 relative cursor-pointer"
        :style="{ backgroundImage: `url(${getAssetsImg('nav-1.png')})` }"
        @click="toggleDropdown"
      >
        <ul v-if="dropdownVisible" class="flex justify-center absolute right-0 top-14 z-[999] bg-white border rounded-2xl cursor-auto shadow-md w-28">
          <li class="px-4 py-2 text-sm text-gray-700 cursor-pointer pl" @click="logout">注销</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import BellIcon from '@/components/icons/IconBell.vue';
  import SearchIcon from '@/components/icons/IconSearch.vue';
  import WaveflagIcon from '@/components/icons/IconWaveflag.vue';
  import GridIcon from '@/components/icons/IconGrid.vue';
  import { getAssetsImg } from '@/util/utils';
  import { useRouter } from 'vue-router';
  import loginService from '@/api/loginService';
  import { ref } from 'vue';

  const router = useRouter();
  const dropdownVisible = ref(false);

  const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
  };

  const logout = async () => {
    try {
      await loginService.logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
</script>

<style scoped>
  /* Add any additional styles here if needed */
</style>
