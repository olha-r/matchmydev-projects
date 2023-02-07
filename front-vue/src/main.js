import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/main.css'

const app = createApp(App)

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',

  });

app.config.globalProperties.$axios = axiosInstance;

app.use(router)

app.mount('#app')

