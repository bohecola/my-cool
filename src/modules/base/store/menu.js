import { defineStore } from 'pinia';
import { ref } from 'vue';
import { storage } from '/@/cool/utils';
import { isArray, isEmpty, isObject, orderBy } from "lodash";
import { viewer, service, config } from "/@/cool";

// 本地缓存
const data = storage.info();

export const useMenuStore = defineStore('menu', function () {
  // 视图路由
  const routes = ref(data['menu.routes'] || []);

  // 菜单组
  const group = ref(data['menu.group'] || []);

  // 顶部菜单序号
  const index = ref(0);

  // 左侧菜单列表
  const list = ref([]);

  // 权限列表
  const perms = ref(data['menu.perms'] || []);

  // 设置左侧菜单
  function setMenu(i) {

  }
});