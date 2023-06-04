import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faUser, faHeart, faShoppingCart, faSearch, faIdCard, faSignOut,
    faPersonWalkingArrowRight, faPen, faBook, faTrashCan, faPlus, faMinus
} from '@fortawesome/free-solid-svg-icons';

import router from './router'
import store from "./store";
import PrimeVue from 'primevue/config';
import VueCookies from 'vue-cookies'
import ToastService from 'primevue/toastservice';

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';

import Ripple from 'primevue/ripple';
import BadgeDirective from "primevue/badgedirective";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import InputText from "primevue/inputtext"
import Button from "primevue/button"
import Password from 'primevue/password';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import AutoComplete from 'primevue/autocomplete';

library.add(
  faUser, faHeart, faShoppingCart, faSearch, faIdCard, faSignOut,
  faPersonWalkingArrowRight, faPen, faBook, faTrashCan, faPlus, faMinus
);

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue, { ripple: true });
app.use(VueCookies, { expires: '365d' })
app.use(ToastService);

app.directive('ripple', Ripple);
app.directive('badge', BadgeDirective);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Password', Password);
app.component('Dialog', Dialog);
app.component('Toast', Toast);
app.component('AutoComplete', AutoComplete);

app.mount('#app');
