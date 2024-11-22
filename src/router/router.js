import { createRouter, createWebHistory } from 'vue-router'
import HomeFeed from '../views/HomeFeed.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeFeed,
    },
    {
      path: '/error',
      name: 'Error',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Error404.vue'),
    },
  ],
})

export default router
