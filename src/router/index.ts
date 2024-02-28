import { createRouter, createWebHistory } from 'vue-router'
import BasicView from '../views/BasicView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'basic',
      component: BasicView
    },
    {
      path: '/props',
      name: 'props',
      component: () => import('../views/PropsView.vue')
    }
  ]
})

export default router
