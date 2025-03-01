import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap
import './assets/styles.css' // Import du style global (Bootstrap)

const app = createApp(App)
app.mount('#app')
