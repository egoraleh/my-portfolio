import { Language } from "@/types/language.ts";
import russiaFlag from "@/assets/images/flags/russia.jpg";
import ukFlag from "@/assets/images/flags/UK.jpg";
import spainFlag from "@/assets/images/flags/spain.jpg";
import franceFlag from "@/assets/images/flags/france.jpg";
import chuvashiaFlag from "@/assets/images/flags/chuvashia.jpg";

const languages: Language[] = [
    {
        id: 1,
        title: "Русский",
        imageUrl: russiaFlag,
        level: "Родной язык"
    },
    {
        id: 2,
        title: "Английский",
        imageUrl: ukFlag,
        level: "Изучаю с начальной школы и по сей день. Уровень B2"
    },
    {
        id: 3,
        title: "Испанский",
        imageUrl: spainFlag,
        level: "Изучаю в данный момент. Уровень A2-B1"
    },
    {
        id: 4,
        title: "Французский",
        imageUrl: franceFlag,
        level: "Изучал в старшей школе где-то 4 года. Уровень A2-B1"
    },
    {
        id: 5,
        title: "Чувашский",
        imageUrl: chuvashiaFlag,
        level: "Изучал в начальной школе. Знаю некоторые слова, базовые конструкции."
    }
];

export default languages;