<script setup lang="ts">
import { useRewards } from "@/composables/useRewards";
import RewardCard from "@/components/RewardCard.vue";

const { getAllRewards } = useRewards();
const rewards = getAllRewards();
</script>

<template>
  <section>
    <h1>Достижения</h1>
    <RewardCard v-for="r in rewards" :key="r.id" :reward="r" />
  </section>
</template>

<style scoped>

</style>