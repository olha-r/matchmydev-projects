import { createRouter, createWebHistory } from 'vue-router'
import CreateProjectView from '../views/CreateProjectView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/create-project',
      name: 'createProject',
      component: CreateProjectView
    },
    {
      path: '/update-project/:id',
      name: 'updateProject',
      component: CreateProjectView
    }

  ]
})

export default router
