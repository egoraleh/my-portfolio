import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Projects = import('@/views/ProjectsView.vue');
const Hobbies = import('@/views/HobbiesView.vue');
const Rewards = import('@/views/RewardsView.vue');
const Contacts = import('@/views/ContactsView.vue');
const Home = import('@/views/HomeView.vue');

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
