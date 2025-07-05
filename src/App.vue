<template>
  <section class="page-content">
    <component :is="isMobile ? MobileLayout : DesktopLayout" />
  </section>
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted, ref } from "vue";
import MobileLayout from '@/ui/layouts/MobileLayout.vue';
import DesktopLayout from '@/ui/layouts/DesktopLayout.vue';

const isMobile = ref(window.innerWidth < 768);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
});
</script>
