<script setup lang="ts">
import type {Project} from "@/types/project.ts";

defineProps<{
  project: Project
}>()

</script>

<template>
  <section>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <a v-if="project.link" :href="project.link" target="_blank">Смотреть на GitHub</a>
  </section>
</template>

<style scoped>

</style>