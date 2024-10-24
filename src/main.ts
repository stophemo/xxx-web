import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import clickOutside from '@/directives/click-outside';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
// 全局注册 v-click-outside 指令
app.directive('click-outside', clickOutside);

app.mount('#app');
