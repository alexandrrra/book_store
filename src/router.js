import {createRouter, createWebHistory} from 'vue-router';
import TheIndex from "@/Views/TheIndex.vue";
import TheCatalog from "@/Views/TheCatalog.vue";
import TheBookCard from "@/Views/TheBookCard.vue";
import TheProfile from "@/Views/TheProfile.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Index',
            component:TheIndex
        },
        {
            path:'/Catalog',
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
        }
    ],
});

export default router;
