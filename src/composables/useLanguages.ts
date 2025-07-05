import languages from '@/consts/languages.ts';
import { Language } from '@/types/Language.ts';

export function useLanguages() {
    const getAllLanguages = (): Language[] => languages.sort((a: Language, b: Language): number => a.id - b.id);

    const getLanguageById = (id: number): Language | undefined =>
        languages.find((l: Language): boolean => l.id === id);

    return {
        getAllLanguages,
        getLanguageById,
    };
}