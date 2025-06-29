<script setup lang="ts">
import type { Language } from "@/types/language";

defineProps<{
  language: Language
}>();

</script>

<template>
  <article class="language-card">
    <figure class="language-card__figure">
      <img :src="language.imageUrl" :alt="`${language.title} флаг`" class="language-card__image flag-wave-clipped">
    </figure>

    <section class="language-card__info">
      <h3 class="language-card__header">{{ language.title }}</h3>
      <p class="language-card__level">{{ language.level }}</p>
    </section>
  </article>
</template>

<style scoped>
.language-card {
  display: flex;
  align-items: center;
  background-color: #fffaf0;
  border-left: 4px solid #ffa726;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  gap: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.language-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.12);
}

.language-card__header {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.75rem;
}

.language-card__figure {
  flex-shrink: 0;
  margin: 0;
  position: relative;
}

.language-card__image {
  max-width: 200px;
  border-radius: 8px;
}

.language-card__level {
  font-size: 1.1rem;
  color: #555;
}
</style>