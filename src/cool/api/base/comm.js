import request from '/@/cool/service/request';

export const person = () => request({
  url: '/comm/person',
  method: 'get'
});

export const permmenu = () => request({
  url: '/comm/permmenu',
  method: 'get'
});