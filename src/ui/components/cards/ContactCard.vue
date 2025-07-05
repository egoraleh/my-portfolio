<template>
  <h3 class="contact-card__header">{{ contact.title }}</h3>
  <figure class="contact-card__figure">
    <a
        class="contact-card__link"
       :href="contact.link"
       target="_blank"
       rel="noopener noreferrer"
    >
      <img :src="contact.imageUrl" :alt="`Логотип ${contact.title}`" class="contact-card__image"/>
    </a>
  </figure>
</template>

<script setup lang='ts'>
import type { Contact } from '@/types/Contact.js';

defineProps<{ contact: Contact }>();
</script>

<style scoped>
.contact-card__header {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.contact-card__figure {
  margin: 0;
}

.contact-card__link {
  display: inline-block;
}

.contact-card__image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: transform 0.3s, filter 0.3s;
  filter: grayscale(40%) brightness(90%);
}

.contact-card__link:hover .contact-card__image {
  transform: scale(1.1);
  filter: grayscale(0%) brightness(100%);
}
</style>
