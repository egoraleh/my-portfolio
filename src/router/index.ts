import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import Hobbies from "@/views/Hobbies.vue";
import Rewards from "@/views/Rewards.vue";
import Contacts from "@/views/Contacts.vue";

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/hobbies', component: Hobbies },
    { path: '/contacts', component: Contacts },
    { path: '/rewards', component: Rewards }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router