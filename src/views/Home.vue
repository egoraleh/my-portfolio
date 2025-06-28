<script setup lang="ts">
import { useLanguages } from "@/composables/useLanguages";
import { useEducations } from "@/composables/useEducations";
import LanguageCard from "@/components/LanguageCard.vue";
import EducationCard from "@/components/EducationCard.vue";

const { getAllLanguages } = useLanguages();
const { getAllEducations } = useEducations();
const languages = getAllLanguages();
const educations = getAllEducations();
</script>

<template>
  <section>
    <h1>Общая информация</h1>
    <p>Алехнович Егор Владимирович, 20 лет</p>
    <img src="" alt="">
    <h2>Образование</h2>
    <EducationCard v-for="e in educations" :key="e.id" :education="e" />
    <h2>Языки</h2>
    <LanguageCard v-for="l in languages" :key="l.id" :language="l" />
  </section>
</template>

<style scoped>

</style>