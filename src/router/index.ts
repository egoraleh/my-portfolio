import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Projects = import('@/views/Projects.vue');
const Hobbies = import('@/views/Hobbies.vue');
const Rewards = import('@/views/Rewards.vue');
const Contacts = import('@/views/Contacts.vue');
const Home = import('@/views/Home.vue');

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home, meta: { title: 'Обо мне' } },
    { path: '/projects', component: Projects, meta: { title: 'Проекты' } },
    { path: '/hobbies', component: Hobbies, meta: { title: 'Хобби' } },
    { path: '/contacts', component: Contacts, meta: { title: 'Контакты' } },
    { path: '/rewards', component: Rewards, meta: { title: 'Достижения' } },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach((to) => {
    document.title = typeof to.meta.title === 'string' ? to.meta.title : 'Default Title';
});

export default router;
