import languages from "@/data/languages.ts";
import { Language } from "@/types/language.ts";

export function useLanguages() {
    const getAllLanguages = (): Language[] => languages

    const getLanguageById = (id: number): Language | undefined =>
        languages.find(l => l.id === id)

    return {
        getAllLanguages,
        getLanguageById
    }
}