<template>
  <DesktopNavbar />
  <main class="desktop-content">
    <RouterView />
  </main>
</template>

<script setup lang='ts'>
import DesktopNavbar from '@/ui/components/navbars/DesktopNavbar.vue';
</script>

<style scoped>
.desktop-content {
  margin-left: 100px;
}
</style>