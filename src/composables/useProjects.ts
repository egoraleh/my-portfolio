import projects from "@/data/projects.ts"
import { Project } from "@/types/project.ts"

export function useProjects() {
    const getAllProjects = (): Project[] => projects

    const getProjectById = (id: number): Project | undefined =>
        projects.find(p => p.id === id)

    return {
        getAllProjects,
        getProjectById
    }
}