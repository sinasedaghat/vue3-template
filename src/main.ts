import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { useInfoStore } from './stores/info'
import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// const infoStore = useInfoStore()
// console.log('information from main', infoStore.information)
app.provide('infoStore', useInfoStore())  // not recommended

app.mount('#app')
