<template>
  <h3 class="project-card__header">{{ project.title }}</h3>
  <p class="project-card__description">{{ project.description }}</p>
  <a
      class="project-card__github-link"
      v-if="project.link"
      :href="project.link"
      target="_blank"
      rel="noopener noreferrer"
  >
    Смотреть на GitHub
  </a>
</template>

<script setup lang='ts'>
import type { Project } from '@/types/Project.js';

defineProps<{ project: Project }>();
</script>

<style scoped>
.project-card__header {
  font-size: 1.6rem;
  font-weight: 600;
  margin: 10px 0 0 0;
  color: #333;
}

.project-card__description {
  font-size: 1.05rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.project-card__github-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: #d17a00;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.project-card__github-link:hover {
  color: #a05500;
  text-decoration: underline;
}
</style>
