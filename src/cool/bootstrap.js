import { createPinia } from 'pinia';
import { router } from './router';
import { useBase } from '/$/base';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export async function bootstrap(Vue) {
  // 缓存
  Vue.use(createPinia());

  // ui库
  Vue.use(ElementPlus);

  // 基础
  const { app } = useBase();

  // 路由
  Vue.use(router);
}