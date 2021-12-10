import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

const app = createApp(App).use(store).use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
