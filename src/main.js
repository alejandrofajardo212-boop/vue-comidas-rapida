import { createApp } from 'vue'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'
import './style.css'
import App from './App.vue'
import { Quasar } from 'quasar'
import iconSet from 'quasar/icon-set/material-icons'
import { router } from './routes/routes.js'

const app = createApp(App)

app.use(Quasar, {
    config: {},
    iconSet,
    plugins: {},
})

app.use(router)
app.mount('#app')