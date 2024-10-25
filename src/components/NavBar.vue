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
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" to="/"
          >Home</RouterLink
        >
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" to="/episode"
          >Episode</RouterLink
        >
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" to="/memo"
          >Memo</RouterLink
        >
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" to="/resources"
          >Resources</RouterLink
        >
        <RouterLink class="text-[#141414] text-sm font-medium leading-normal" to="/about"
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
      </el-image>
      <AvatarDialog
        v-if="dropdownVisible"
        v-click-outside="closeDropdown"
        :updateAvatar="updateAvatar"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
  import BellIcon from '@/components/icons/IconBell.vue';
  import SearchIcon from '@/components/icons/IconSearch.vue';
  import WaveflagIcon from '@/components/icons/IconWaveflag.vue';
  import GridIcon from '@/components/icons/IconGrid.vue';
  import userService from '@/api/userService';
  import { onBeforeMount, ref } from 'vue';
  import { getAssetsImg, getWebImg } from '@/util/utils';
  import AvatarDialog from '@/components/AvatarDialog.vue';
  import { type UserInfo, useUserStore } from '@/stores/userStore';

  const dropdownVisible = ref<boolean>(false);

  const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
    console.log('toggle成功');
  };

  const closeDropdown = () => {
    dropdownVisible.value = false;
    console.log('close by outside成功');
  };

  const avatar = ref<string>('');

  const updateAvatar = (newAvatarUrl: string) => {
    avatar.value = newAvatarUrl;
    console.log('修改头像成功');
  };

  onBeforeMount(async () => {
    let currentUserInfo = await userService.getCurrentUserInfo();
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
        role: currentUserInfo.role,
      };
      useUserStore().setUserInfo(userInfo);
    }

    if (currentUserInfo && currentUserInfo.avatar) {
      avatar.value = currentUserInfo.avatar;
    }
    avatar.value = getWebImg(avatar.value, getAssetsImg('nav-1'));
  });
</script>

<style scoped></style>
