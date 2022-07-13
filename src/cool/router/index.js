import { ElMessage } from 'element-plus';
import { 
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router";
import { storage, config } from '/@/cool';
import { cloneDeep, isArray } from "lodash";

// 视图文件
const views = import.meta.globEager("/src/**/views/**/*.vue");

for (const i in views) {
	views[i.slice(5)] = views[i];
	delete views[i];
}

// 默认路由
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

// 创建
const router = createRouter({
  history: config.app.router.mode === 'history' ? createWebHistory() : createWebHashHistory(),
  routes
});

// 路由守卫

// 自定义

// 错误监听

// 视图
const viewer = {
  add(data) {
    // 列表
    const list = isArray(data) ? data : [data];

    list.forEach((e) => {
      const d = cloneDeep(e);

      // 命名
      d.name = d.router;

      if (!d.component) {
        const url = d.viewPath;

        if (url) {
          if (
            /^(http[s]?:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i.test(
							url
						)
          ) {
						d.meta.iframeUrl = url;
						d.component = () => import(`./$/base/pages/iframe/index.vue`);
					} else {
						d.component = () => Promise.resolve(views[url.replace('cool/', '')]);
          }
        } else {
          d.redirect = '/404';
        }
      }

      // 批量添加
      router.addRoute('index', d);
    });
  },

  get() {
    return router.getRoutes().find((e) => e.name == 'index')?.children;
  }
};

export { router, viewer };