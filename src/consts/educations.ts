import { Education } from '@/types/Education.ts';
import gym5 from '@/assets/images/educations/gym5.jpg';
import gym4 from '@/assets/images/educations/gym4.jpg';
import yandexLiceum from '@/assets/images/educations/yandex.jpg';
import kpfu from '@/assets/images/educations/kpfu.jpg';

const educations: Education[] = [
    {
        id: 1,
        title: 'МБОУ "Гимназия №4" г. Чебоксары',
        date: 'Время обучения: 2012 - 2016',
        imageUrl: gym4,
    },
    {
        id: 2,
        title: 'МАОУ "Гимназия №5" г. Чебоксары',
        date: 'Время обучения: 2016 - 2023',
        imageUrl: gym5,
    },
    {
        id: 3,
        title: 'Яндекс-Лицей',
        date: 'Время обучения: 2021 - 2023',
        imageUrl: yandexLiceum,
    },
    {
        id: 4,
        title: 'КФУ ИТИС г. Казань',
        date: 'Время обучения: 2023 - н.в.',
        imageUrl: kpfu,
    }
];

export default educations;
