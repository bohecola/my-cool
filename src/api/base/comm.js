import request from '@/service/request';

export const login = (data) => request({
  url: '/login',
  method: 'post',
  data
});