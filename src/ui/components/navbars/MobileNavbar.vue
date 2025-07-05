<template>
  <header ref="navbarRef" class="mobile-navbar">
    <button class="burger" ref="burgerRef" @click="isOpen = !isOpen" :aria-label="isOpen ? 'Закрыть меню' : 'Открыть меню'">
      <img :src="isOpen ? crossIcon : burgerIcon" alt="Меню" class="burger-icon" />
    </button>

    <transition name="fade-slide">
      <div v-if="!isOpen" class="active-tab-text">{{ activeTabText }}</div>
    </transition>

    <transition name="menu">
      <nav v-show="isOpen" ref="menuRef" class="mobile-menu">
        <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="mobile-menu__link"
            @click="isOpen = false"
        >
          <img :src="item.icon" :alt="item.text" class="mobile-menu__icon" />
          <span>{{ item.text }}</span>
        </router-link>
      </nav>
    </transition>
  </header>
</template>


<script setup lang='ts'>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import menuItems from '@/consts/navBarIcons';
import burgerIcon from '@/assets/images/icons/hamburger.png';
import crossIcon from '@/assets/images/icons/cross.png';
import { useRoute } from "vue-router";

const isOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);
const burgerRef = ref<HTMLElement | null>(null);
const navbarRef = ref<HTMLElement | null>(null);

const route = useRoute();

const activeTabText = computed(() => {
  const activeItem = menuItems.find(item => item.path === route.path);
  return activeItem ? activeItem.text : '';
});

const handleClickOutside = (event: MouseEvent) => {
  if (!isOpen.value) return;

  const target = event.target as Node;
  if (
      (menuRef.value && menuRef.value.contains(target)) ||
      (burgerRef.value && burgerRef.value.contains(target)) ||
      (navbarRef.value && navbarRef.value.contains(target))
  ) {
    return;
  }

  isOpen.value = false;
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.mobile-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #f0e0c0;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  z-index: 1000;
}

.burger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}


.mobile-menu {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  background-color: #f0e0c0;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  z-index: 5000;
}

.mobile-menu__link {
  display: flex;
  gap: 20px;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  color: #333;
  transition: 0.2s;
}

.mobile-menu__link.router-link-active {
  color: #ff6600;
}

.mobile-menu__icon {
  width: 30px;
  height: 30px;
  margin-right: 0.8rem;
  filter: brightness(0) saturate(100%) invert(20%) sepia(30%) saturate(500%) hue-rotate(10deg);
  transition: filter 0.2s;
}

.mobile-menu__link.router-link-active .mobile-menu__icon {
  filter: brightness(0) saturate(100%) invert(40%) sepia(70%) saturate(800%) hue-rotate(-10deg);
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.burger {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.burger-icon {
  width: 28px;
  height: 28px;
}

.active-tab-text {
  margin-left: 1rem;
  font-weight: 600;
  font-size: 1.2rem;
  color: #333;
  white-space: nowrap;
  user-select: none;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
