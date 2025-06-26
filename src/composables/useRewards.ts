import rewards from "@/data/rewards.ts";
import { Reward } from "@/types/reward.ts";

export function useRewards() {
    const getAllRewards = (): Reward[] => rewards

    const getProjectById = (id: number): Reward | undefined =>
        rewards.find(r => r.id === id)

    return {
        getAllRewards,
        getProjectById
    }
}