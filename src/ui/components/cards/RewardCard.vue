<template>
  <h3 class="reward-card__header">{{ reward.title }}</h3>
  <p class="reward-card__rank">{{ reward.rank }}</p>
  <p class="reward-card__year">{{ reward.year }}</p>
</template>

<script setup lang='ts'>
import type { Reward } from '@/types/Reward.js';

defineProps<{ reward: Reward }>();
</script>

<style scoped>
.reward-card__header {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 10px 0 0 0;
  color: #333;
}

.reward-card__rank {
  font-size: 1.1rem;
  color: #444;
  margin: 0;
}

.reward-card__year {
  font-size: 1rem;
  color: #777;
  margin: 0;
}
</style>
