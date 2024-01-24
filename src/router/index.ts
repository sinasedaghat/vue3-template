import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nested',
      name: 'nested',
      component: () => import('@/views/NestedView.vue')
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import('@/views/ReactiveView.vue')
    },
  ]
})

export default router
