import rewards from '@/consts/rewards.ts';
import { Reward } from '@/types/reward.ts';

export function useRewards() {
    const getAllRewards = (): Reward[] => rewards.sort((a: Reward, b: Reward): number => a.id - b.id);

    const getProjectById = (id: number): Reward | undefined =>
        rewards.find((r: Reward): boolean => r.id === id);

    return {
        getAllRewards,
        getProjectById,
    };
}