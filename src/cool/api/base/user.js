import request from '/@/cool/service/request';

export const getUserList = (params) => request({
  url: '/sys/user/list',
  method: 'get',
  params
});