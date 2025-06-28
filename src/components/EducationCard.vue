<script setup lang="ts">
import type {Education} from "@/types/education";

defineProps<{
  education: Education
}>();

</script>

<template>
  <section>
    <h3>{{ education.title }}</h3>
    <p>{{ education.date }}</p>
  </section>
</template>

<style scoped>

</style>