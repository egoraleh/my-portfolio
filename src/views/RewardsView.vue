<template>
  <section class="reward-section">
    <h1 class="reward-section__header">Достижения</h1>
    <ul class="reward-section__list">
      <li v-for="r in rewards" :key="r.id">
        <BaseCard customClass="reward-card">
          <RewardCard :reward="r" />
        </BaseCard>
      </li>
    </ul>
  </section>
</template>

<script setup lang='ts'>
import { useRewards } from '@/composables/useRewards';
import BaseCard from '@/ui/base/BaseCard.vue';
import RewardCard from '@/ui/components/cards/RewardCard.vue';

const { getAllRewards } = useRewards();
const rewards = getAllRewards();
</script>

<style scoped>
.reward-section {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.reward-section__header {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
}

.reward-section__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.reward-card {
  min-height: 160px;
  border-radius: 12px;
  gap: 0.5rem;
}
</style>
