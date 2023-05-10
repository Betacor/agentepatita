import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Import our custom CSS
import './assets/styles.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


createApp(App).use(bootstrap).use(store).use(router).mount('#app')

