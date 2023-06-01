import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHeart, faShoppingCart, faSearch, faIdCard, faSignOut } from '@fortawesome/free-solid-svg-icons';
import router from './router'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import Ripple from 'primevue/ripple';
import BadgeDirective from "primevue/badgedirective";
import InputText from "primevue/inputtext"
import Button from "primevue/button"
import Password from 'primevue/password';

library.add(faUser, faHeart, faShoppingCart, faSearch, faIdCard, faSignOut);

const app = createApp(App);

app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(PrimeVue, { ripple: true });

app.directive('ripple', Ripple);
app.directive('badge', BadgeDirective);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Password', Password);

app.mount('#app');
