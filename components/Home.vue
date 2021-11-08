<template>
  <div class="home w-full h-full flex justify-center py-4 relative">
    <div class="w-6/12 h-full flex flex-col shadow-md">
      <top-menu :is-menu-open="isMenuOpen" :open-menu="openMenu" />
      <cloth-preview :is-menu-open="isMenuOpen" :open-menu="openMenu" />
    </div>
    <div class="text-right absolute" style="bottom: 18px; right: 32px">
      <p class="text-gray-300">
        Made with <span class="text-cared text-lg">&hearts;</span> by Bee
      </p>
    </div>
  </div>
</template>

<script>
import ClothPreview from './clothPreview.vue'
import topMenu from './topMenu.vue'
export default {
  components: { topMenu, ClothPreview },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style>
.home {
  background-image: url('~static/images/desktop_bg.svg');
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-color: #adaaaa;
}
</style>
