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
    },
    {
      path: '/emits',
      name: 'emits',
      component: () => import('../views/EmitsView.vue')
    },
    {
      path: '/vmodel',
      name: 'vmodel',
      component: () => import('../views/VModelView.vue')
    },
    {
      path: '/fallthrough',
      name: 'fallthrough',
      component: () => import('../views/FallthroughView.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('../views/SlotView.vue')
    },
  ]
})

export default router
