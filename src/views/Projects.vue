<script setup lang="ts">
import { useProjects } from "@/composables/useProjects";
import ProjectCard from "@/components/ProjectCard.vue";

const { getAllProjects } = useProjects();
const projects = getAllProjects();
</script>

<template>
  <section class="project-section">
    <h1 class="project-section__header">Проекты</h1>
    <ul class="project-section__list">
      <li v-for="p in projects" :key="p.id">
        <ProjectCard :project="p" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.project-section {
  padding: 2rem 0;
}

.project-section__header {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
}

.project-section__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>