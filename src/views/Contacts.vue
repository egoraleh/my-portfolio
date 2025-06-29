<script setup lang="ts">
import { useContacts } from "@/composables/useContacts";
import ContactCard from "@/components/ContactCard.vue";

const { getAllContacts } = useContacts();
const contacts = getAllContacts();
</script>

<template>
  <section class="contact-section">
    <h1 class="contact-section__header">Контакты</h1>
    <ul class="contact-section__list">
      <li v-for="c in contacts" :key="c.id">
        <ContactCard :contact="c" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.contact-section__header {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
}

.contact-section__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>