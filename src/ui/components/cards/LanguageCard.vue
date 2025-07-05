<template>
  <figure class="language-card__figure">
    <img :src="language.imageUrl" :alt="`${language.title} флаг`" class="language-card__image flag-wave-clipped" />
  </figure>

  <section class="language-card__info">
    <h3 class="language-card__header">{{ language.title }}</h3>
    <p class="language-card__level">{{ language.level }}</p>
  </section>
</template>

<script setup lang='ts'>
import type { Language } from '@/types/Language.js';

defineProps<{ language: Language }>();
</script>

<style scoped>
.language-card__figure {
  flex-shrink: 0;
  margin: 0;
  position: relative;
}

.language-card__image {
  max-width: 200px;
  border-radius: 8px;
}

.language-card__header {
  font-size: 1.5rem;
  color: #333;
  padding: 0;
  margin: 0.5rem 0 0.5rem 0;
}

.language-card__level {
  font-size: 1.1rem;
  color: #555;
  margin: 0;
}
</style>
