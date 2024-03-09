import './assets/main.scss'
import GlobalComponent from './components/GlobalComponent.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('GP', GlobalComponent)
app.use(createPinia())
app.use(router)
app.provide('mainMessage', 'This message from main.ts file and it is available to all Components!')

app.mount('#app')
