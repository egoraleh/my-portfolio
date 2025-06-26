import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import Education from "@/views/Education.vue";
import Hobbies from "@/views/Hobbies.vue";
import Rewards from "@/views/Rewards.vue";
import Skills from "@/views/Skills.vue";

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/hobbies', component: Hobbies },
    { path: '/education', component: Education },
    { path: '/rewards', component: Rewards },
    { path: '/skills', component: Skills }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router