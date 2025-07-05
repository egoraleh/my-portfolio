<template>
  <article
      class="base-card"
      :class="customClass"
  >
    <slot />
  </article>
</template>

<script setup lang="ts">
defineProps<{
  customClass: string;
}>();
</script>

<style scoped>
.base-card {
  background-color: #fdf5e6;
  border-left: 4px solid #ff9800;
  border-radius: 14px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.base-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}
</style>
