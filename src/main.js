import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import './assets/css/index.scss';

import service from './api';

const app = createApp(App);

app.config.globalProperties.service = service;

app
.use(ElementPlus)
.use(router)
.use(store)
.mount('#app');
