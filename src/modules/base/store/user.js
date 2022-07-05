import { defineStore } from 'pinia';
import { ref } from 'vue';
import { storage } from '/@/cool/utils';
import { config, router } from '/@/cool';

// 本地缓存
const data = storage.info();

export const useUserStore = defineStore('user', function () {
  // 标识
  const token = null || ref(config.test.token || data.token);

  function setToken(data) {
    // 请求的唯一标识
    token.value = data.token;
    storage.set('token', data.token, data.expire);
    
    // 刷新 token 的唯一标识
    storage.set('refreshToken', data.refreshToken, data.refreshExpire)
  }

  // 用户信息
  const info = ref(data.userInfo)

  return {
    token,
    info,
    setToken
  }
});