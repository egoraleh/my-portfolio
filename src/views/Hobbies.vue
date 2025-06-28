<script setup lang="ts">
import { useHobbies } from "@/composables/useHobbies";
import HobbyCard from "@/components/HobbyCard.vue";

const { getAllHobbies } = useHobbies();
const hobbies = getAllHobbies();
</script>

<template>
  <section>
    <h1>Хобби</h1>
    <HobbyCard v-for="h in hobbies" :key="h.id" :hobby="h" />
  </section>
</template>

<style scoped>

</style>