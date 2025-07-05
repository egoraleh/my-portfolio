<template>
  <section class="project-section">
    <h1 class="project-section__header">Проекты</h1>
    <ul class="project-section__list">
      <li v-for="p in projects" :key="p.id">
        <BaseCard customClass="project-card">
          <ProjectCard :project="p" />
        </BaseCard>
      </li>
    </ul>
  </section>
</template>

<script setup lang='ts'>
import { useProjects } from '@/composables/useProjects';
import BaseCard from '@/ui/base/BaseCard.vue';
import ProjectCard from '@/ui/components/cards/ProjectCard.vue';

const { getAllProjects } = useProjects();
const projects = getAllProjects();
</script>

<style scoped>
.project-section {
  margin: 0 auto 20px;
}

.project-section__header {
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
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

.project-card {
  gap: 0.5rem;
  padding: 1.25rem;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .project-section__header {
    display: none;
  }

  .project-section {
    margin-top: 10px;
  }
}
</style>
