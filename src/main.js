import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { authInit } from '@/firebase'

authInit()
    .then(() =>{
        createApp(App).use(router).mount('#app')
    })



