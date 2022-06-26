import { isArray, orderBy } from 'lodash';
import storage from './storage';

// 首字母大写
export function firstUpperCase(value) {
  return value.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
    return $1.toUpperCase() + $2;
  });
}

// 获取方法名
export function getNames(value) {
  return Object.getOwnPropertyNames(value.constructor.prototype);
}

// 深度合并
export function deepMerge(a, b) {
  let k;
  for(k in b) {
    a[k] = 
      a[k] && a[k].toString() === '[object Object]' ? deepMerge(a[k], b[k]) : (a[k] = b[k]);
  }
  return a;
}

// 获取地址栏参数
export function getUrlParam(name) {
	const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	const r = window.location.search.substr(1).match(reg);
	if (r != null) return decodeURIComponent(r[2]);
	return null;
}

export { storage };