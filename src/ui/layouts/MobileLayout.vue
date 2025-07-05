<template>
  <MobileNavbar />
  <main class="mobile-content">
    <RouterView />
  </main>
</template>

<script setup lang='ts'>
import MobileNavbar from '@/ui/components/navbars/MobileNavbar.vue';
</script>

<style scoped>
.mobile-content {
  padding: 60px 10px 20px;
}
</style>