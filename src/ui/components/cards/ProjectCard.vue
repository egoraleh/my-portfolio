<template>
  <article class="project-card">
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
  </article>
</template>

<script setup lang='ts'>
import type { Project } from '@/types/project.js';

defineProps<{
  project: Project
}>();
</script>

<style scoped>
.project-card {
  background-color: #fdf5e6;
  border-left: 4px solid #ff9800;
  border-radius: 14px;
  padding: 1.25rem;
  margin-right: 50px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.12);
}

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
