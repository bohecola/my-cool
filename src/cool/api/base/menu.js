import request from '/@/cool/service/request';

export const getMenuList = (params) => request({
  url: '/sys/menu/list',
  method: 'get',
  params
});