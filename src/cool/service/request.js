import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useBase } from "/$/base";
import { router } from '../router';

NProgress.configure({ showSpinner: false });

const service = axios.create({
  baseURL: 'http://localhost:3000/api/admin',
  timeout: 5000
});

service.interceptors.request.use(
  req => {
    const { user } = useBase();

    if (user.token) {
      // 请求标识
      req.headers['Authorization'] = user.token;
    }
    
    return req;
  },

  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  res => {

    if (!res?.data) {
      return res;
    }

    const { code, data, message } = res.data;

    if (!code) {
      return res.data;
    }

    switch (code) {
      case 1000:
        return data;
      default:
        return Promise.reject({ code, message });
    }
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default service;
