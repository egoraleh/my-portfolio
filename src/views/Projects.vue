<script setup lang="ts">
import { useProjects } from "@/composables/useProjects";
import ProjectCard from "@/components/ProjectCard.vue";

const { getAllProjects } = useProjects();
const projects = getAllProjects();
</script>

<template>
  <section>
    <h1>Проекты</h1>
    <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
  </section>
</template>

<style scoped>

</style>