import {MenuItem} from '@/types/MenuItem.ts';
import info from '@/assets/images/icons/info.png';
import projects from '@/assets/images/icons/projects.png';
import hobbies from '@/assets/images/icons/hobbies.png';
import rewards from '@/assets/images/icons/rewards.png';
import contacts from '@/assets/images/icons/contacts.png';

const menuItems: MenuItem[] = [
    {
        path: '/',
        text: 'Обо мне',
        icon: info,
    },
    {
        path: '/projects',
        text: 'Проекты',
        icon: projects,
    },
    {
        path: '/hobbies',
        text: 'Хобби',
        icon: hobbies,
    },
    {
        path: '/rewards',
        text: 'Достижения',
        icon: rewards,
    },
    {
        path: '/contacts',
        text: 'Контакты',
        icon: contacts,
    },
];

export default menuItems;
