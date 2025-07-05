<template>
  <section>
    <section class="info-section">
      <h1 class="info-section__header">Общая информация</h1>
      <p class="info-section__info">Алехнович Егор Владимирович, 20 лет</p>

      <figure class="info-section__figure">
        <img class="info-section__image" src="@/assets/images/photos/avatar.jpg" alt="">
      </figure>
    </section>

    <section class="education-section">
      <h2 class="education-section__header">Образование</h2>
      <ul class="education-section__list">
        <li v-for="e in educations" :key="e.id">
          <BaseCard customClass="education-card">
            <EducationCard :education="e" />
          </BaseCard>
        </li>
      </ul>
    </section>

    <section class="language-section">
      <h2 class="language-section__header">Языки</h2>
      <ul class="language-section__list">
        <li v-for="l in languages" :key="l.id">
          <BaseCard customClass="language-card">
            <LanguageCard :language="l" />
          </BaseCard>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup lang='ts'>
import { useLanguages } from '@/composables/useLanguages';
import { useEducations } from '@/composables/useEducations';
import BaseCard from '@/ui/base/BaseCard.vue';
import LanguageCard from '@/ui/components/cards/LanguageCard.vue';
import EducationCard from '@/ui/components/cards/EducationCard.vue';

const { getAllLanguages } = useLanguages();
const { getAllEducations } = useEducations();
const languages = getAllLanguages();
const educations = getAllEducations();
</script>

<style scoped>
.info-section {
  text-align: center;
  margin-bottom: 3rem;
}

.info-section__header {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.info-section__info {
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.info-section__figure {
  margin: 0 auto;
  max-width: 350px;
}

.info-section__image {
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.education-section,
.language-section {
  max-width: 900px;
  margin: 0 auto 3rem;
}

.education-section__header,
.language-section__header {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.25rem;
  text-align: center;
}

.education-section__list,
.language-section__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.language-card {
  flex-direction: row;
  padding: 1rem;
  gap: 1.5rem;
}

.education-card {
  flex-direction: row;
  padding: 1rem;
  gap: 1.5rem;
}
</style>
