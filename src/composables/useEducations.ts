import educations from '@/consts/educations.ts';
import { Education } from '@/types/Education.ts';

export function useEducations() {
    const getAllEducations = (): Education[] => educations.sort((a: Education, b: Education): number => a.id - b.id);

    const getEducationById = (id: number): Education | undefined =>
        educations.find((e: Education): boolean => e.id === id);

    return {
        getAllEducations,
        getEducationById,
    };
}