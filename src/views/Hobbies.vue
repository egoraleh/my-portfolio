<script setup lang="ts">
import { useHobbies } from "@/composables/useHobbies";
import HobbyCard from "@/components/HobbyCard.vue";

const { getAllHobbies } = useHobbies();
const hobbies = getAllHobbies();
</script>

<template>
  <section class="hobby-section">
    <h1 class="hobby-section__header">Хобби</h1>
    <ul class="hobby-section__list">
      <li v-for="h in hobbies" :key="h.id">
        <HobbyCard :hobby="h" />
      </li>
    </ul>
  </section>
</template>

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
</style>