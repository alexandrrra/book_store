import {createRouter, createWebHistory} from 'vue-router';
import TheIndex from "@/Views/TheIndex.vue";
import TheBook from "@/components/TheBook.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Index',
            component:TheIndex
        },
        {
            path:'/books/:id',
            name:'Book',
            component: TheBook
        },
    ],
});

export default router;
