<template>
  <section class="hobby-section">
    <h1 class="hobby-section__header">Хобби</h1>
    <ul class="hobby-section__list">
      <li v-for="h in hobbies" :key="h.id">
        <BaseCard customClass="hobby-card">
          <HobbyCard :hobby="h" />
        </BaseCard>
      </li>
    </ul>
  </section>
</template>

<script setup lang='ts'>
import { useHobbies } from '@/composables/useHobbies';
import BaseCard from '@/ui/base/BaseCard.vue';
import HobbyCard from '@/ui/components/cards/HobbyCard.vue';

const { getAllHobbies } = useHobbies();
const hobbies = getAllHobbies();
</script>

<style scoped>
.hobby-section {
  padding: 2rem;
  max-width: 80%;
  margin: 0 auto;
}

.hobby-section__header {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
}

.hobby-section__list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.hobby-card {
  align-items: center;
  flex-direction: row;
  min-height: 250px;
  border-radius: 16px;
  padding: 1rem;
  gap: 1.5rem;
}
</style>
