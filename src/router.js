import {createRouter, createWebHistory} from 'vue-router';
import TheIndex from "@/Views/TheIndex.vue";
import TheCatalog from "@/Views/TheCatalog.vue";
import TheBookCard from "@/Views/TheBookCard.vue";
import TheProfile from "@/Views/TheProfile.vue";
import TheFavorite from "@/Views/TheFavorite.vue";
import TheCart from "@/Views/TheCart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:'/',
      name:'Index',
      component:TheIndex
    },
    {
      path:'/catalog',
      name:'Catalog',
      component:TheCatalog
    },
    {
      path:'/books/:id',
      name:'BookCard',
      component: TheBookCard
    },
    {
      path:'/profile',
      name:'Profile',
      component: TheProfile
    },
    {
      path:'/favorite',
      name:'Favorite',
      component: TheFavorite
    },
    {
      path:'/cart',
      name:'Cart',
      component: TheCart
    }
  ],
});

export default router;
