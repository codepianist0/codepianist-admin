import { createApp } from 'vue'
import App from './App.vue'
import router from './stores'

import "normalize.css"
import "@/assets/css/reset.css"

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
