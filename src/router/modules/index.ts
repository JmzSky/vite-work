const routes = [
  {
    path: '/',
    component: () => import('@/pages/index.vue') //路由懒加载
  },
  {
    path: '/home',
    component: () => import('@/pages/home.vue')
  }
]

export default routes
