import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Router from './router/index'
import App from './App.vue'
import './style.css'

createApp(App).use(Router).use(createPinia()).mount('#app')
