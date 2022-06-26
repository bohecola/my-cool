import { ElMessage } from 'element-plus';
import { 
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router";
import { storage, config } from '/@/cool';

const routes = [
  {
    path: '/',
    component: () => import('/@/views/home')
  },
  {
    path: '/login',
    component: () => import('/$/base/pages/login')
  }
];

const router = createRouter({
  // history: config.app.router.mode === 'history' ? createWebHistory() : createWebHashHistory(),
  history: createWebHistory(),
  routes
});

export { router };