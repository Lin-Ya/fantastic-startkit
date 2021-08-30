import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import router from '@/router'
app.use(router)

import store from './store'
app.use(store)

import globalProperties from '@/util/global.properties'
globalProperties(app)

// 加载 svg 图标
import 'vite-plugin-svg-icons/register'

// 全局样式
import '@/assets/styles/globals.scss'

app.mount('#app')
