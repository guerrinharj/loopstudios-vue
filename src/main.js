import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import TheNav from './components/TheNav.vue'
import TheLogo from './components/TheLogo.vue'

const app = createApp(App)

app.component('the-nav', TheNav)
app.component('the-logo', TheLogo)

app.use(store)

app.mount('#app');