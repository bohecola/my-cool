import axios from 'axios';
import store from '@/store';
import router from '@/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });


const service = axios.create({
  baseURL: 'http://localhost:3000/api/admin',
  timeout: 5000
});

export default service;
