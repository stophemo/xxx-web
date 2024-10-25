<template>
  <ul
    class="flex flex-col justify-center absolute right-0 top-14 z-[999] bg-white border rounded-2xl cursor-auto shadow-md w-36"
  >
    <li class="px-4 py-2 text-sm text-gray-700 cursor-pointer" @click="openImagePicker"
      >更换头像</li
    >
    <li class="px-4 py-2 text-sm text-gray-700 cursor-pointer" @click="logout">注销</li>
  </ul>
</template>

<script setup lang="ts">
  import userService, { type UserUpdateInputDTO } from '@/api/userService';
  import router from '@/router';
  import fileService from '@/api/fileService';
  import { useUserStore } from '@/stores/userStore';
  import { ElMessage } from 'element-plus';
  import Compressor from 'compressorjs';

  const logout = async () => {
    try {
      await userService.logout();
      await router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const openImagePicker = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', handleImageSelection);
    input.click();
  };

  const props = defineProps({
    updateAvatar: {
      type: Function,
      required: true,
    },
  });
  const handleImageSelection = async (event: Event) => {
    try {
      const file = (event.target as HTMLInputElement).files?.[0];
      // 检查文件是否存在，未选择文件则提示并返回
      if (!file) {
        ElMessage.error('未选择文件');
        return;
      }
      // 校验图片大小，例如限制为 5MB
      if (file.size > 5 * 1024 * 1024) {
        ElMessage.error('图片大小超过限制（5MB）');
        return;
      }
      new Compressor(file, {
        quality: 0.5,
        strict: true,
        maxWidth: 500,
        maxHeight: 500,
        minWidth: 100,
        minHeight: 100,
        mimeType: 'image/webp',
        convertSize: 1024,
        success(result) {
          let newfile = new File([result], file.name, { type: file.type });
          // 生成文件路径
          const filePath = `/tencent/xxx/server/images/${Date.now()}_${file.name}`;
          // 上传文件
          fileService.uploadFileByForm(false, filePath, newfile).then(() => {
            // 获取文件信息
            fileService
              .getFileInfo({
                page: 1,
                perPage: 0,
                password: '',
                path: filePath,
                refresh: false,
              })
              .then((fileInfo) => {
                // 检查文件信息并更新用户头像
                if (fileInfo?.raw_url) {
                  const userInfoInput: UserUpdateInputDTO = {
                    id: useUserStore().userInfo?.id ?? '',
                    avatar: fileInfo.raw_url,
                  };
                  userService.updateUserInfo(userInfoInput);
                  props.updateAvatar(fileInfo.raw_url);
                  ElMessage.success('头像上传成功');
                } else {
                  ElMessage.error('无法获取头像 URL');
                }
              });
          });
        },
        error(err) {
          console.log(err.message);
          ElMessage.error('文件上传过程中出现错误');
        },
      });
    } catch (error) {
      console.error('上传头像时发生错误:', error);
      ElMessage.error('头像上传失败，请稍后重试');
    }
  };
</script>

<style scoped></style>
