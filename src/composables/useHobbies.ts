import hobbies from '@/consts/hobbies.ts';
import { Hobby } from '@/types/Hobby.ts';

export function useHobbies() {
    const getAllHobbies = (): Hobby[] => hobbies.sort((a: Hobby, b: Hobby): number => a.id - b.id);

    const getHobbyById = (id: number): Hobby | undefined =>
        hobbies.find((h: Hobby): boolean => h.id === id);

    return {
        getAllHobbies,
        getHobbyById,
    };
}