import { Hobby } from '@/types/hobby.ts';
import chess from '@/assets/images/hobbies/chess.png';
import basketball from '@/assets/images/hobbies/basketball.png';
import volleyball from '@/assets/images/hobbies/volleyball.png';
import sambo from '@/assets/images/hobbies/sambo.png';
import programming from '@/assets/images/hobbies/programming.png';
import auto from '@/assets/images/hobbies/auto.png';

const hobbies: Hobby[] = [
    {
        id: 1,
        title: 'Шахматы',
        imageUrl: chess,
        description: 'Занимался около 8 лет. Выполнил 2 взрослый разряд. Участвовал в огромном количестве турниров, много призовых мест.',
    },
    {
        id: 2,
        title: 'Баскетбол',
        imageUrl: basketball,
        description: 'Не занимался никогда, но очень нравится этот вид спорта, в свободное время играю с друзьями на уличных площадках.',
    },
    {
        id: 3,
        title: 'Самбо',
        imageUrl: sambo,
        description: 'Занимался 12 лет. Выполнил КМС по самбо и по дзюдо. Участвовал во всех турнирах и соревнованиях, в которых можно было. Огромное количество призовых мест и наград.',
    },
    {
        id: 6,
        title: 'Автомобили',
        imageUrl: auto,
        description: 'Нравится любая техника с ДВС, но автомобили особенно. Есть в них что-то особенное...',
    },
    {
        id: 4,
        title: 'Волейбол',
        imageUrl: volleyball,
        description: 'Занимался около 5 лет в школе. С школьной командой, в которой я был капитаном, участвовали в ШВЛ и достаточно далеко проходили.',
    },
    {
        id: 5,
        title: 'Программирование',
        imageUrl: programming,
        description: 'Нравится программировать. В процессе обучения познакомился с множеством языков программирования(Java, Python, C++, Kotlin, JavaScript, PHP).',
    }
];

export default hobbies;
