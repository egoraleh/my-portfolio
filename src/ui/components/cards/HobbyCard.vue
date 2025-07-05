<template>
  <figure class="hobby-card__figure">
    <img class="hobby-card__image" :src="hobby.imageUrl" :alt="hobby.title" />
  </figure>

  <section class="hobby-card__content">
    <h3 class="hobby-card__header">{{ hobby.title }}</h3>
    <p class="hobby-card__description">{{ hobby.description }}</p>
  </section>
</template>

<script setup lang='ts'>
import type { Hobby } from '@/types/Hobby.js';

defineProps<{ hobby: Hobby }>();
</script>

<style scoped>
.hobby-card__figure {
  flex-shrink: 0;
  margin: 0;
  position: relative;
}

.hobby-card__figure::after {
  content: "";
  position: absolute;
  top: 0;
  right: -0.75rem;
  width: 2px;
  height: 100%;
  background-color: #ff9800;
  opacity: 0.7;
  border-radius: 1px;
}

.hobby-card__image {
  width: 200px;
}

.hobby-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-left: 10px;
  flex: 1;
}

.hobby-card__header {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.hobby-card__description {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.5;
  margin: 0;
}
</style>
