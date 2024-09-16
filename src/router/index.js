import { createRouter, createWebHistory } from 'vue-router'
const Markdown = () => import('@/views/markdown/index.vue')
const Md2wx = () => import('@/views/md2wx/index.vue')
const Mh = () => import('@/views/markdown-here/index.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Markdown
    },
    {
      path: '/markdown',
      component: Markdown
    },
    {
      path: '/md2wx',
      component: Md2wx
    },
    {
      path: '/markdown-here',
      component: Mh
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
