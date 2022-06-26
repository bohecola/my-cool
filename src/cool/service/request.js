import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { router } from '../router';

NProgress.configure({ showSpinner: false });

const service = axios.create({
  baseURL: 'http://localhost:3000/api/admin',
  timeout: 5000
});

service.interceptors.request.use(
  config => {
  
    return config;
  },

  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  res => {

    return res;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default service;
