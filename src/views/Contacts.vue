<script setup lang="ts">
import { useContacts } from "@/composables/useContacts";
import ContactCard from "@/components/ContactCard.vue";

const { getAllContacts } = useContacts();
const contacts = getAllContacts();
</script>

<template>
  <section>
    <h1>Контакты</h1>
    <ContactCard v-for="c in contacts" :key="c.id" :contact="c" />
  </section>
</template>

<style scoped>

</style>