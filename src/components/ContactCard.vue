<script setup lang="ts">
import type {Contact} from "@/types/contact";

defineProps<{
  contact: Contact
}>();
</script>

<template>
  <section>
    <h3>{{ contact.title }}</h3>
    <a :href="contact.link" target="_blank">
      <img :src="contact.imageUrl" alt="">
    </a>
  </section>
</template>

<style scoped>

</style>