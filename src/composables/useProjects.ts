import projects from "@/data/projects.ts"
import { Project } from "@/types/project.ts"

export function useProjects() {
    const getAllProjects = (): Project[] => projects.sort((a: Project, b: Project): number => a.id - b.id);

    const getProjectById = (id: number): Project | undefined =>
        projects.find((p: Project): boolean => p.id === id);

    return {
        getAllProjects,
        getProjectById
    };
}