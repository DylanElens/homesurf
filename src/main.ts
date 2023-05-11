import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import FileUpload from "primevue/fileupload";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row"; // optional

const app = createApp(App);
app.use(PrimeVue);
app.component("pButton", Button);
app.component("pTextarea", Textarea);
app.component("pFileUpload", FileUpload);
app.component("pDataTable", DataTable);
app.component("pColumn", Column);
app.component("pColumnGroup", ColumnGroup);
app.component("pRow", Row);
app.mount("#app");
