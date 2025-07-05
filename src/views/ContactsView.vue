<template>
  <section class="contact-section">
    <h1 class="contact-section__header">Контакты</h1>
    <ul class="contact-section__list">
      <li v-for="c in contacts" :key="c.id">
        <BaseCard customClass="contact-card">
          <ContactCard :contact="c" />
        </BaseCard>
      </li>
    </ul>
  </section>
</template>

<script setup lang='ts'>
import { useContacts } from '@/composables/useContacts';
import BaseCard from '@/ui/base/BaseCard.vue';
import ContactCard from '@/ui/components/cards/ContactCard.vue';

const { getAllContacts } = useContacts();
const contacts = getAllContacts();
</script>

<style scoped>
.contact-section {
  max-width: 600px;
  margin: 0 auto 20px;
}

.contact-section__header {
  font-size: 2rem;
  margin-bottom: 1.2rem;
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

.contact-card {
  flex-direction: row;
  border-radius: 12px;
  padding: 20px 50px 20px 30px;
  justify-content: space-between;
  text-align: center;
}

.contact-card:hover {
  transform: none;
}

@media (max-width: 768px) {
  .contact-section__header {
    display: none;
  }

  .contact-section {
    margin-top: 10px;
  }
}
</style>
