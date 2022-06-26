import request from '/@/cool/service/request';

export const login = (data) => request({
  url: '/open/login',
  method: 'post',
  data
});