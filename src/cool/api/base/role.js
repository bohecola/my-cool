import request from '/@/cool/service/request';

export const getRoleList = (params) => request({
  url: '/sys/role/list',
  method: 'get',
  params
});