import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('@/views/home')
  },
  {
    path: '/login',
    component: () => import('@/pages/login')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;