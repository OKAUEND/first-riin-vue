import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import MainComponent from './pages/index.vue'
import AboutComponent from './pages/about.vue'
import DevelopComponent from './pages/develop.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const routes = [
  { path: '/', component: MainComponent },
  { path: '/about', component: AboutComponent },
  { path: '/develop', component: DevelopComponent }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).use(vuetify).mount('#app')
