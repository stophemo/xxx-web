import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name:'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name:'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/episode',
      name: 'episode',
      component: () => import('../views/EpisodeView.vue')
    },
    {
      path: '/memo',
      name: 'memo',
      component: () => import('../views/MemoView.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/ResourcesView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
