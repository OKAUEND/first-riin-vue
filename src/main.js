import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import MainComponent from './pages/index.vue'
import AboutComponent from './pages/about.vue'

const routes = [
  { path: '/', component: MainComponent },
  { path: '/about', component: AboutComponent }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')
