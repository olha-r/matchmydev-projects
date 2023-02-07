import { createRouter, createWebHistory } from 'vue-router'
import CreateProjectView from '../views/CreateProjectView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CreateProjectView
    }
  ]
})

export default router
