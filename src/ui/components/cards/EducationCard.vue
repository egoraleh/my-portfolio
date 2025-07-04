<template>
  <article class="education-card">
    <figure class="education-card__figure">
      <img class="education-card__image" :src="education.imageUrl" :alt="education.title">
    </figure>

    <section class="education-card__info">
      <h3 class="education-card__header">{{ education.title }}</h3>
      <p class="education-card__date">{{ education.date }}</p>
    </section>
  </article>
</template>

<script setup lang='ts'>
import { Education } from '@/types/education.js';

defineProps<{
  education: Education
}>();
</script>

<style scoped>
.education-card {
  display: flex;
  align-items: center;
  background-color: #fffaf0;
  border-left: 4px solid #ff9800;
  border-radius: 14px;
  padding: 1rem;
  min-height: 250px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  gap: 1.5rem;
}

.education-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.12);
}

.education-card__header {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.75rem;
}

.education-card__figure {
  flex-shrink: 0;
  margin: 0 10px 0 0;
  position: relative;
}

.education-card__image {
  max-width: 200px;
  border-radius: 8px;
}

.education-card__date {
  font-size: 1.05rem;
  color: #666;
}
</style>
