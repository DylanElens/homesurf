import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import FileUpload from 'primevue/fileupload'

const app = createApp(App)
app.use(PrimeVue)
app.component('pButton', Button)
app.component('pTextarea', Textarea)
app.component('pFileUpload', FileUpload)
app.mount('#app')
