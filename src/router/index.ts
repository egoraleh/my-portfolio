import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import Hobbies from "@/views/Hobbies.vue";
import Rewards from "@/views/Rewards.vue";
import Contacts from "@/views/Contacts.vue";

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home, meta: { title: "Обо мне" } },
    { path: '/projects', component: Projects, meta: { title: "Проекты" } },
    { path: '/hobbies', component: Hobbies, meta: { title: "Хобби"} },
    { path: '/contacts', component: Contacts, meta: { title: "Контакты"} },
    { path: '/rewards', component: Rewards, meta: { title: "Достижения"} }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to) => {
    document.title = typeof to.meta.title === 'string' ? to.meta.title : 'Default Title'
})

export default router