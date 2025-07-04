<template>
  <article class="reward-card">
    <h3 class="reward-card__header">{{ reward.title }}</h3>
    <p class="reward-card__rank">{{ reward.rank }}</p>
    <p class="reward-card__year">{{ reward.year }}</p>
  </article>
</template>

<script setup lang='ts'>
import type { Reward } from '@/types/reward.js';

defineProps<{
  reward: Reward
}>();
</script>

<style scoped>
.reward-card {
  background-color: #fdf5e6;
  border-left: 6px solid #ff9800;
  min-height: 160px;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.reward-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.reward-card__header {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 10px 0 0 0;
  color: #333;
}

.reward-card__year {
  font-size: 1rem;
  color: #777;
  margin: 0;
}

.reward-card__rank {
  font-size: 1.1rem;
  color: #444;
  margin: 0;
}
</style>
