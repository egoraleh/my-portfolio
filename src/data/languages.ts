import { Language } from "@/types/language.ts";

const languages: Language[] = [
    {
        id: 1,
        title: "Русский",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPn03Mtoz4KbghToztL5htiKUZoSoQHVopow&s",
        level: "Родной язык"
    },
    {
        id: 2,
        title: "Английский",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVaWvlPPf1fFar-7cctZstDboFa1Liw5SYA&s",
        level: "Изучаю с начальной школы и по сей день. Уровень B2"
    },
    {
        id: 3,
        title: "Испанский",
        imageUrl: "https://flagfs.ru/content/flagi-stran/isp.jpg",
        level: "Изучаю в данный момент. Уровень A2-B1"
    },
    {
        id: 4,
        title: "Французский",
        imageUrl: "https://flagfs.ru/content/flagi-stran/frans.jpeg",
        level: "Изучал в старшей школе где-то 4 года. Уровень A2-B1"
    },
    {
        id: 5,
        title: "Чувашский",
        imageUrl: "https://thumbs.dreamstime.com/b/%D1%84%D0%BB%D0%B0%D0%B3-%D1%87%D1%83%D0%B2%D0%B0%D1%88%D1%81%D0%BA%D0%BE%D0%B9-%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8-%D0%BD%D0%B0-%D1%84%D0%BE%D0%BD%D0%B5-%D0%B2%D0%BE%D0%BB%D0%BD%D0%B8%D1%81%D1%82%D0%BE%D0%B9-%D1%88%D0%B5%D0%BB%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5-%D1%82%D0%BA%D0%B0%D0%BD%D0%B8-178359172.jpg",
        level: "Изучал в начальной школе. Знаю некоторые слова, базовые конструкции."
    }
];

export default languages;