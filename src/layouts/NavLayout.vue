<template>
  <header>
    <NavBar />
  </header>
  <main>
    <router-view v-slot="{ Component }" class="overflow-y-auto">
      <transition name="page-transition" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <footer>
    <p>© 2024 My Website</p>
  </footer>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
/* 定义过渡效果的样式 */
.page-transition-enter-active {
  animation: fadeIn 0.5s ease both;
}
.page-transition-leave-active {
  animation: fadeOut 0.5s ease both;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
