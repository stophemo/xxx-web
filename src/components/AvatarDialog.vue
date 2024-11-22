<template>
  <ul class="flex flex-col justify-center absolute right-0 top-14 z-[999] bg-white border rounded-2xl cursor-auto shadow-md w-36">
    <li class="px-4 py-2 text-sm text-gray-700 cursor-pointer" @click="openImagePicker">更换头像</li>
    <li class="px-4 py-2 text-sm text-gray-700 cursor-pointer" @click="onLogout">注销</li>
  </ul>
</template>

<script setup lang="ts">
import userService, { type UserUpdateInputDTO } from '@/api/userService'
import router from '@/router'
import fileService from '@/api/fileService'
import { useUserStore } from '@/stores/userStore'
import { ElMessage } from 'element-plus'
import { getProperty } from '@/util/getConfig'
import { checkImgExists, compressAndConvertToWebP } from '@/util/utils'

const userStore = useUserStore()

const onLogout = async () => {
  userService.logout().then(() => {
    router.push('/login')
  })
}

const openImagePicker = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*'
  input.addEventListener('change', handleImageSelection)
  input.click()
}

const handleImageSelection = async (event: Event) => {
  try {
    const file = (event.target as HTMLInputElement).files?.[0]
    // 检查文件是否存在，未选择文件则提示并返回
    if (!file) {
      ElMessage.error('未选择文件')
      return
    }
    compressAndConvertToWebP(file, 0.2)
      .then(result => {
        const fileName = 'avatar_' + (userStore.userInfo?.name || '') + '_' + Date.now()
        const newFile = new File([result], `${fileName}.webp`, { type: 'image/webp' })
        // 生成文件路径
        const fileDir = getProperty('imageStoragePath')
        // 上传文件
        fileService.uploadImage(fileDir, newFile).then(imgUrl => {
          checkImgExists(imgUrl)
            .then(() => {
              const userInfoInput: UserUpdateInputDTO = {
                id: userStore.userInfo?.id ?? '',
                avatar: imgUrl
              }
              userService.updateUserInfo(userInfoInput)
              ElMessage.success('头像上传成功')
            })
            .catch(() => {
              ElMessage.error('无法获取头像 URL')
            })
        })
      })
      .catch(err => {
        console.log(err.message)
        ElMessage.error('文件上传过程中出现错误')
      })
  } catch (error) {
    console.error('上传头像时发生错误:', error)
    ElMessage.error('头像上传失败，请稍后重试')
  }
}
</script>

<style scoped></style>
