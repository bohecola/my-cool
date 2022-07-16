import { createPinia } from 'pinia';
import { router, viewer } from './router';
import { useBase } from '/$/base';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export async function bootstrap(Vue) {
  // 缓存
  Vue.use(createPinia());

  // ui库
  Vue.use(ElementPlus);

  // 基础
  const { app, user, menu } = useBase();

  // 取缓存视图
  viewer.add(menu.routes);

  // 路由
  Vue.use(router);

  // 开启
	app.showLoading();

  if (user.token) {
    // 获取用户信息
    user.get();

    // 获取菜单权限
    await menu.get();
  }

  app.hideLoading();
}