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
      <!-- Login Form Container -->
      <div class="bg-white px-8 py-10 rounded-lg shadow-sm border border-gray-300">
        <h2 class="text-2xl font-bold text-center mb-6 text-gray-900">Welcome back</h2>

        <!-- Username Field -->
        <div class="mb-4">
          <label for="username" class="block text-sm text-gray-700">Username</label>
          <input
            v-model="username"
            id="username"
            type="text"
            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700"
            placeholder="Enter username"
          />
        </div>

        <!-- Password Field -->
        <div class="mb-4">
          <label for="password" class="block text-sm text-gray-700">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700"
            placeholder="Enter password"
          />
        </div>

        <!-- Forgot password link -->
        <div class="mb-6 text-right">
          <a href="#" class="text-sm text-gray-500 hover:text-gray-900">Forgot password?</a>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full py-3 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none"
          @click="onLogin"
        >
          Login
        </button>
      </div>

      <!-- Sign up link -->
      <div class="mt-6 text-center text-sm text-gray-500">
        Don't have an account?
        <a href="#" class="text-gray-900 hover:underline" @click="onSignup">Sign up here</a>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import IconDiamond from '@/components/icons/IconDiamond.vue';
  import userService from '@/api/userService';
  import router from '@/router';
  import { ElMessage } from 'element-plus';

  const username = ref('');
  const password = ref('');

  const onLogin = () => {
    try {
      userService.login(username.value, password.value).then(() => {
        router.push('/');
      });
    } catch (error) {
      console.error('登录失败：', error);
      ElMessage.error({
        message: '登录失败',
        duration: 5 * 1000,
      });
    }
  };

  const onSignup = (event: Event) => {
    event.preventDefault();
    router.push('/register');
  };

  onMounted(async () => {
    try {
      const userInfo = await userService.getCurrentUserInfo();
      if (userInfo.isLogin) {
        await router.push('/');
      }
    } catch (error) {
      console.error('获取当前用户信息失败：', error);
      ElMessage.error({
        message: '获取当前用户信息失败',
        duration: 5 * 1000,
      });
    }
  });
</script>

<style scoped></style>
