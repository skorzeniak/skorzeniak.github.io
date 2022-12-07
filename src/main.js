import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'flowbite'
import 'remixicon/fonts/remixicon.css'
import vueScrollto from 'vue-scrollto'


createApp(App).use(vueScrollto).mount('#app')
