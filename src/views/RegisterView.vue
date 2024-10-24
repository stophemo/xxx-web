<template>
  <!-- Header -->
  <header
    class="flex items-center whitespace-nowrap bg-neutral-50 border-b border-solid border-b-[#ededed] px-10 py-3 gap-4"
  >
    <IconDiamond />
    <h2
      class="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] h-10 flex items-center justify-center"
    >
      Home
    </h2>
  </header>

  <!-- Main Content -->
  <main class="flex items-center justify-center min-h-screen bg-neutral-50">
    <div class="w-full max-w-md">
      <!-- Registration Form Container -->
      <div class="bg-white px-8 py-10 rounded-lg shadow-sm border border-gray-300">
        <h2 class="text-2xl font-bold text-center mb-6 text-gray-900">Register</h2>
        <!-- Name Field -->
        <div class="mb-3">
          <label for="name" class="block text-sm text-gray-700"
            >Name <span class="text-red-500">*</span></label
          >
          <input
            v-model="name"
            id="name"
            type="text"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700"
            placeholder="Enter name"
            required
          />
        </div>
        <!-- Password Field -->
        <div class="mb-3">
          <label for="password" class="block text-sm text-gray-700"
            >Password <span class="text-red-500">*</span></label
          >
          <input
            v-model="password"
            id="password"
            type="password"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700"
            placeholder="Enter password"
            required
          />
        </div>
        <!-- Phone Field -->
        <div class="mb-3">
          <label for="phone" class="block text-sm text-gray-700"
            >Phone <span class="text-red-500">*</span></label
          >
          <input
            v-model="phone"
            id="phone"
            type="text"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700"
            placeholder="Enter phone number"
            required
          />
        </div>
        <!-- Email Field -->
        <div class="mb-3">
          <label for="email" class="block text-sm text-gray-700">Email (Optional)</label>
          <input
            v-model="email"
            id="email"
            type="email"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700"
            placeholder="Enter email (optional)"
          />
        </div>
        <!-- Avatar Field (Optional) -->
        <div class="mb-3">
          <label for="avatar" class="block text-sm text-gray-700">Avatar (Optional)</label>
          <input
            type="file"
            @change="onAvatarChange"
            id="avatarUpload"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700"
          />
        </div>
        <!-- Register Button -->
        <button
          type="submit"
          class="w-full py-3 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none"
          @click="onRegister"
        >
          Register
        </button>
      </div>

      <!-- Sign in link -->
      <div class="mt-6 text-center text-sm text-gray-500">
        Already have an account?
        <a href="#" class="text-gray-900 hover:underline" @click="onLogin">Sign in here</a>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import IconDiamond from '@/components/icons/IconDiamond.vue';
  import userService from '@/api/userService';
  import router from '@/router';
  import { ElMessage } from 'element-plus';
  import fileService, { type FileInfoGetOutputDTO } from '@/api/fileService';

  const email = ref('');
  const phone = ref('');
  const name = ref('');
  const nickname = ref('');
  const password = ref('');
  const gender = ref(0);
  let avatar = ref('');
  const role = ref('user');

  const onRegister = () => {
    const userData = {
      email: email.value,
      phone: phone.value,
      name: name.value,
      nickname: nickname.value,
      password: password.value,
      gender: gender.value,
      avatar: avatar.value,
      role: role.value,
    };

    userService
      .register(userData)
      .then(() => {
        ElMessage.success({
          message: 'Registration successful!',
          duration: 5 * 1000,
        });
        return router.push('/login');
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        ElMessage.error({
          message: 'Registration failed. Please try again.',
          duration: 5 * 1000,
        });
      });
  };

  const onLogin = (event: Event) => {
    event.preventDefault();
    router.push('/login');
  };

  const onAvatarChange = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const filePath = `/tencent/xxx/server/images/${file.name}_${Date.now()}`;
      fileService
        .uploadFileByForm(false, filePath, file)
        .then(async () => {
          const fileInfo: FileInfoGetOutputDTO = await fileService.getFileInfo({
            page: 1,
            perPage: 0,
            password: '',
            path: filePath,
            refresh: false,
          })
          if (fileInfo && fileInfo.raw_url) {
            avatar.value = fileInfo.raw_url;
            ElMessage.success('头像上传成功');
            console.log("上传成功");
          } else {
            ElMessage.error('无法获取头像 URL');
            console.log("上传失败");
          }
        })
        .catch((error) => {
          console.error('上传头像时发生错误：', error);
          ElMessage.error('头像上传失败，请稍后重试');
        });
    }
  };
</script>

<style scoped>
  /* Reduce padding and margins for form elements */
  label {
    font-size: 0.9rem;
  }

  input,
  select {
    font-size: 0.9rem;
  }

  /* Add some spacing between form sections */
  div + div {
    margin-top: 10px;
  }
</style>
