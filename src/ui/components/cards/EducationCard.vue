<template>
  <figure class="education-card__figure">
    <img class="education-card__image" :src="education.imageUrl" :alt="education.title" />
  </figure>

  <section class="education-card__info">
    <h3 class="education-card__header">{{ education.title }}</h3>
    <p class="education-card__date">{{ education.date }}</p>
  </section>
</template>

<script setup lang='ts'>
import { Education } from '@/types/Education.js';

defineProps<{ education: Education }>();
</script>

<style scoped>
.education-card__figure {
  flex-shrink: 0;
  margin: 0 10px 0 0;
  position: relative;
}

.education-card__image {
  max-width: 150px;
  border-radius: 8px;
}

.education-card__header {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.75rem;
}

.education-card__date {
  font-size: 1.05rem;
  color: #666;
}
</style>
