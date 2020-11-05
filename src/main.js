import { createApp } from 'vue'
import App from './App.vue'
import dweb from 'dweb-toolbox/index'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'dweb-toolbox/assets/css/dwebstyle.css'




const app = createApp(App).use(store).use(router).use(dweb)
app.mount('#app')