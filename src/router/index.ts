import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:id?',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/episode/:id',
      name: 'episode',
      component: () => import('../views/EpisodeView.vue'),
    },
    {
      path: '/memo/:id',
      name: 'memo',
      component: () => import('../views/MemoView.vue'),
    },
    {
      path: '/resources/:id',
      name: 'resources',
      component: () => import('../views/ResourcesView.vue'),
    },
    {
      path: '/about/:id',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

// const checkIsLogin = async () => {
//   userService.getCurrentUserInfo().then((res) => {
//     if (res && res.isLogin) {
//       router.push('/');
//     }
//   });
// };

export default router;
