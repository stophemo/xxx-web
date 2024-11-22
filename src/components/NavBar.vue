<template>
  <div class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ededed] px-10 py-3">
    <div class="flex items-center gap-4 text-[#141414]">
      <WaveflagIcon />
      <h2 class="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">Home</h2>
    </div>

    <div class="flex flex-1 justify-end gap-8">
      <nav class="flex items-center gap-9">
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" :to="{ name: 'home', params: { id: userStore.userInfo?.name } }">Home</RouterLink>
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" :to="{ name: 'episode', params: { id: userStore.userInfo?.name } }"
          >Episode</RouterLink
        >
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" :to="{ name: 'memo', params: { id: userStore.userInfo?.name } }">Memo</RouterLink>
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" :to="{ name: 'resources', params: { id: userStore.userInfo?.name } }"
          >Resources</RouterLink
        >
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" :to="{ name: 'about', params: { id: userStore.userInfo?.name } }"
          >About</RouterLink
        >
      </nav>
      <div class="flex gap-2">
        <SearchIcon />
        <GridIcon />
        <BellIcon />
      </div>
      <el-image
        class="aspect-square rounded-full size-10 relative cursor-pointer"
        :key="avatar"
        :src="avatar"
        fit="cover"
        loading="lazy"
        @click="toggleDropdown"
      >
        <template #placeholder>
          <el-image :src="getAssetsImg('avatar-defualt')" fit="cover" />
        </template>
        <template #error>
          <el-image :src="getAssetsImg('avatar-defualt')" fit="cover" />
        </template>
      </el-image>
      <AvatarDialog v-if="dropdownVisible" v-click-outside="closeDropdown" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BellIcon from '@/components/icons/IconBell.vue'
import SearchIcon from '@/components/icons/IconSearch.vue'
import WaveflagIcon from '@/components/icons/IconWaveflag.vue'
import GridIcon from '@/components/icons/IconGrid.vue'
import userService from '@/api/userService'
import { computed, onBeforeMount, ref } from 'vue'
import { getAssetsImg, getWebImg } from '@/util/utils'
import AvatarDialog from '@/components/AvatarDialog.vue'
import { useUserStore } from '@/stores/userStore'

let userStore = useUserStore()
const dropdownVisible = ref<boolean>(false)
const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value
}

const closeDropdown = () => {
  dropdownVisible.value = false
}

let avatar = computed(() => {
  console.log(userStore.userInfo?.avatar)
  return getWebImg(userStore.userInfo?.avatar, getAssetsImg('nav-1'))
})

onBeforeMount(() => {
  userService.getCurrentUserInfo()
})
</script>

<style scoped></style>
