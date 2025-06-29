<script setup lang="ts">
import { ref, watch } from 'vue';

const expanded = ref(false);

watch(expanded, (val) => {
  if (val) {
    document.body.style.marginLeft = '300px';
    document.body.style.transition = 'margin-left 0.3s ease';
  } else {
    document.body.style.marginLeft = '100px';
  }
});
</script>

<template>
  <nav
      class="sidebar"
      :class="{ expanded }"
      @mouseenter="expanded = true"
      @mouseleave="expanded = false"
  >
    <router-link to="/" class="sidebar__link" title="Главная">
      <img class="sidebar__icon" src="@/assets/images/icons/info.png" alt="Общая информация">
      <span class="sidebar__text">Обо мне</span>
    </router-link>
    <router-link to="/projects" class="sidebar__link" title="Проекты">
      <img class="sidebar__icon" src="@/assets/images/icons/projects.png" alt="Проекты">
      <span class="sidebar__text">Проекты</span>
    </router-link>
    <router-link to="/hobbies" class="sidebar__link" title="Хобби">
      <img class="sidebar__icon" src="@/assets/images/icons/hobbies.png" alt="Хобби">
      <span class="sidebar__text">Хобби</span>
    </router-link>
    <router-link to="/rewards" class="sidebar__link" title="Достижения">
      <img class="sidebar__icon" src="@/assets/images/icons/rewards.png" alt="Достижения">
      <span class="sidebar__text">Достижения</span>
    </router-link>
    <router-link to="/contacts" class="sidebar__link" title="Контакты">
      <img class="sidebar__icon" src="@/assets/images/icons/contacts.png" alt="Контакты">
      <span class="sidebar__text">Контакты</span>
    </router-link>
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
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
  width: 280px;
  align-items: flex-start;
  padding-left: 1rem;
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
  transition: transform 0.2s, filter 0.2s;
  filter: brightness(0) saturate(100%) invert(20%) sepia(30%) saturate(500%) hue-rotate(10deg);
}

.sidebar__link:hover .sidebar__icon,
.sidebar__link:hover .sidebar__text{
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