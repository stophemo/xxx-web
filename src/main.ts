import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/main.css';
import App from './App.vue';
import router from './router';
import clickOutside from '@/directives/click-outside';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(ElementPlus)
  .directive('click-outside', clickOutside);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');
