<template>
  <nav
      class="sidebar"
      :class="{ expanded }"
      @mouseenter="expanded = true"
      @mouseleave="expanded = false"
  >
    <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="sidebar__link"
        :title="item.text"
    >
      <img class="sidebar__icon" :src="item.icon" :alt="item.text" />
      <span class="sidebar__text">{{ item.text }}</span>
    </router-link>
  </nav>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import menuItems from '@/consts/navBarIcons';

const expanded = ref(false);
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 85px;
  height: 100%;
  background-color: #f0e0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.15);
  border-top-right-radius: 20px;
  transition: width 0.3s ease;
  overflow: hidden;
  z-index: 1000;
}

.sidebar.expanded {
  width: 250px;
  align-items: center;
}

.sidebar__link {
  display: flex;
  align-items: center;
  width: 100%;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
}

.sidebar__icon {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  transition: transform 0.2s, filter 0.2s;
  filter: brightness(0) saturate(100%) invert(20%) sepia(30%) saturate(500%) hue-rotate(10deg);
}

.sidebar__link:hover .sidebar__icon,
.sidebar__link:hover .sidebar__text {
  transform: scale(1.2);
  filter: brightness(0) saturate(100%) invert(40%) sepia(70%) saturate(800%) hue-rotate(-10deg);
  color: #ff6600;
}

.sidebar__link:hover .sidebar__text {
  margin-left: 1.5rem;
}

.sidebar__link.router-link-active .sidebar__icon {
  filter: brightness(0) saturate(100%) invert(40%) sepia(70%) saturate(800%) hue-rotate(-10deg);
}

.sidebar__text {
  margin-left: 1rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  user-select: none;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.sidebar.expanded .sidebar__text {
  opacity: 1;
  pointer-events: auto;
  user-select: auto;
}
</style>
