<script setup lang="ts">
import type {Hobby} from "@/types/hobby";

defineProps<{
  hobby: Hobby
}>();

</script>

<template>
  <section>
    <h3>{{ hobby.title }}</h3>
    <img :src="hobby.imageUrl" :alt="hobby.title">
    <p>{{ hobby.description }}</p>
  </section>
</template>

<style scoped>

</style>