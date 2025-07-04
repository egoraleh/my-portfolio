<template>
  <article class="contact-card">
    <h3 class="contact-card__header">{{ contact.title }}</h3>

    <figure class="contact-card__figure">
      <a
          class="contact-card__link"
          :href="contact.link"
          target="_blank"
          rel="noopener noreferrer"
      >
        <img class="contact-card__image" :src="contact.imageUrl" :alt="`Логотип ${contact.title}`">
      </a>
    </figure>
  </article>
</template>

<script setup lang='ts'>
import type { Contact } from '@/types/contact.js';

defineProps<{
  contact: Contact
}>();
</script>

<style scoped>
.contact-card {
  background-color: #fdf5e6;
  border-radius: 12px;
  display: flex;
  padding: 20px 50px 20px 30px;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  border-left: 4px solid #ff9800;
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

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
