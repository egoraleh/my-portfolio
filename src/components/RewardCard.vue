<script setup lang="ts">
import type { Reward } from "@/types/reward";

defineProps<{
  reward: Reward
}>();

</script>

<template>
  <section>
    <h3>{{ reward.title }}</h3>
    <p>{{ reward.year }}</p>
    <p>{{ reward.rank }}</p>
  </section>
</template>

<style scoped>

</style>