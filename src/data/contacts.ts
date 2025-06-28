import { Contact } from "@/types/contact.ts";
import vkLogo from "@/assets/images/logos/vk.png";
import telegramLogo from "@/assets/images/logos/telegram.png";
import githubLogo from "@/assets/images/logos/github.png";
import gitlabLogo from "@/assets/images/logos/gitlab.png";

const contacts: Contact[] = [
    {
        id: 1,
        title: "ВКонтакте",
        imageUrl: vkLogo,
        link: "https://m.vk.com/id387110577"
    },
    {
        id: 2,
        title: "Telegram",
        imageUrl: telegramLogo,
        link: "https://t.me/egor21zzz"
    },
    {
        id: 3,
        title: "GitHub",
        imageUrl: githubLogo,
        link: "https://github.com/egoraleh"
    },
    {
        id: 4,
        title: "GitLab",
        imageUrl: gitlabLogo,
        link: "https://gitlab.com/egoraleh"
    }
];

export default contacts;