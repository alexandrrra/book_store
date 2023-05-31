import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHeart, faShoppingCart, faSearch, faIdCard, faSignOut } from '@fortawesome/free-solid-svg-icons';

import router from './router'

library.add(faUser, faHeart, faShoppingCart, faSearch, faIdCard, faSignOut);
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
