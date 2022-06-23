import request from '@/service/request';

export const login = (data) => request({
  url: '/open/login',
  method: 'post',
  data
});