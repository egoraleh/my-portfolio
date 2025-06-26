import educations from "@/data/educations.ts";
import { Education } from "@/types/education.ts";

export function useEducations() {
    const getAllEducations = (): Education[] => educations

    const getEducationById = (id: number): Education | undefined =>
        educations.find(e => e.id === id)

    return {
        getAllEducations,
        getEducationById
    }
}