<script setup lang="ts">
import type {Language} from "@/types/language";

defineProps<{
  language: Language
}>();

</script>

<template>
  <section>
    <h3>{{ language.title }}</h3>
    <img :src="language.imageUrl" alt="Флаг" class="flag-wave-clipped">
    <p>{{ language.level }}</p>
  </section>
</template>

<style scoped>
.flag-wave-clipped {
  display: inline-block;
  position: relative;
  max-width: 150px;
  animation: wave-clip 4s infinite ease-in-out;
  clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      0% 100%
  );
}

@keyframes wave-clip {
  0% {
    clip-path: polygon(
        0% 0%,
        100% 5%,
        100% 95%,
        0% 100%
    );
  }
  50% {
    clip-path: polygon(
        0% 5%,
        100% 0%,
        100% 100%,
        0% 95%
    );
  }
  100% {
    clip-path: polygon(
        0% 0%,
        100% 5%,
        100% 95%,
        0% 100%
    );
  }
}
</style>