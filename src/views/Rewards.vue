<script setup lang="ts">
import { useRewards } from "@/composables/useRewards";
import RewardCard from "@/components/RewardCard.vue";

const { getAllRewards } = useRewards();
const rewards = getAllRewards();
console.log(rewards.length);
</script>

<template>
  <section class="reward-section">
    <h1 class="reward-section__header">Достижения</h1>
    <ul class="reward-section__list">
      <li v-for="r in rewards" :key="r.id">
        <RewardCard :reward="r" />
      </li>
    </ul>
  </section>
</template>

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
</style>