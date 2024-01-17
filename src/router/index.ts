import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import Header from '../views/multiple/HeaderView.vue'
// import Footer from '../views/multiple/FooterView.vue'
// import MultipleHomeView from '../views/multiple/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/parents',
      name: 'parents',
      component: () => import('../views/ParentsView.vue'),
      children: [
        {
          path: '',
          name: 'parents_home',
          component: () => import('../views/parents/ParentsHomeView.vue'),
        },
        {
          path: 'first_child',
          name: 'first_child',
          component: () => import('../views/parents/FirstChildView.vue'),
        },
        {
          path: 'second_child',
          name: 'second_child',
          component: () => import('../views/parents/SecondChildView.vue'),
        },
        {
          path: 'last_child',
          name: 'last_child',
          component: () => import('../views/parents/LastChildView.vue'),
        },
      ],
    },
    {
      path: '/multiple',
      name: 'multiple',
      components: {
        default: () => import('../views/multiple/HomeView.vue'),
        Header: () => import('../views/multiple/Header.vue'),
        Footer: () => import('../views/multiple/Footer.vue'),
        // default: MultipleHomeView,
        // // Header: Header,
        // Header,
        // // Footer: Footer,
        // Footer,
      }
    },
  ]
})

export default router
