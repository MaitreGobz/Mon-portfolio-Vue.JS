import { createRouter, createWebHistory } from 'vue-router'
import HomeFeed from '../views/HomeFeed.vue'
import Error404 from '@/views/Error404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeFeed,
    },
    {
      path: '/:catchAll(.*)',
      name: 'Error',
      component: Error404,
    },
  ],
});

export default router
