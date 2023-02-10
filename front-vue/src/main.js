import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import axiosPlugin from './plugins/axios'


const app = createApp(App)

app.use(axiosPlugin)

app.use(router)

app.mount('#app')