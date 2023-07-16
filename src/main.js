import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store'


const app = createApp(App)

import './styles/app.css'; // Here

app.use(store)
app.use(router)
app.mount('#app')
