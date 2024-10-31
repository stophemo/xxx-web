<template>
  <div class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ededed] px-10 py-3">
    <div class="flex items-center gap-4 text-[#141414]">
      <WaveflagIcon />
      <h2 class="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">Home</h2>
    </div>

    <div class="flex flex-1 justify-end gap-8">
      <nav class="flex items-center gap-9">
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" :to="{ name: 'home', params: { id: userName } }">Home</RouterLink>
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" :to="{ name: 'episode', params: { id: userName } }">Episode</RouterLink>
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" :to="{ name: 'memo', params: { id: userName } }">Memo</RouterLink>
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" :to="{ name: 'resources', params: { id: userName } }">Resources</RouterLink>
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" :to="{ name: 'about', params: { id: userName } }">About</RouterLink>
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
      <AvatarDialog v-if="dropdownVisible" v-click-outside="closeDropdown" :updateAvatar="updateAvatar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BellIcon from '@/components/icons/IconBell.vue'
import SearchIcon from '@/components/icons/IconSearch.vue'
import WaveflagIcon from '@/components/icons/IconWaveflag.vue'
import GridIcon from '@/components/icons/IconGrid.vue'
import userService from '@/api/userService'
import { onBeforeMount, ref } from 'vue'
import { getAssetsImg, getWebImg } from '@/util/utils'
import AvatarDialog from '@/components/AvatarDialog.vue'
import { type UserInfo, useUserStore } from '@/stores/userStore'

const userName = ref<string>('0')

const dropdownVisible = ref<boolean>(false)

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value
}

const closeDropdown = () => {
  dropdownVisible.value = false
}

const avatar = ref<string>('')

const updateAvatar = (newAvatarUrl: string) => {
  avatar.value = newAvatarUrl
}

onBeforeMount(() => {
  userService.getCurrentUserInfo().then(currentUserInfo => {
    if (currentUserInfo) {
      const userInfo: UserInfo = {
        id: currentUserInfo.id,
        email: currentUserInfo.email,
        phone: currentUserInfo.phone,
        name: currentUserInfo.name,
        nickname: currentUserInfo.nickname,
        gender: currentUserInfo.gender,
        avatar: currentUserInfo.avatar,
        status: currentUserInfo.status,
        ordinal: currentUserInfo.ordinal,
        role: currentUserInfo.role
      }
      userName.value = currentUserInfo.name
      useUserStore().setUserInfo(userInfo)
      avatar.value = getWebImg(currentUserInfo.avatar, getAssetsImg('nav-1'))
    }
  })
})
</script>

<style scoped></style>
