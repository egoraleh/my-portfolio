import hobbies from "@/data/hobbies.ts";
import { Hobby } from "@/types/hobby.ts";

export function useHobbies() {
    const getAllHobbies = (): Hobby[] => hobbies

    const getHobbyById = (id: number): Hobby | undefined =>
        hobbies.find(h => h.id === id)

    return {
        getAllHobbies,
        getHobbyById
    }
}