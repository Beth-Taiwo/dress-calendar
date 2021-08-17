<template>
  <header
    class="bg-caLightGray rounded-3xl rounded-b-none p-4 text-center relative"
  >
    <button
      class="absolute inset-y-1/4 bg-white w-10 h-8 flex justify-center items-center rounded-md focus:outline-none z-20"
      style="left: -10px"
      @click="openMenu"
    >
      <i v-if="!isMenuOpen" class="fas fa-bars"></i>
      <i v-else class="fas fa-times"></i>
    </button>
    <p class="text-transBlack font-medium">Monday 12th - Thursday 16th</p>
    <div
      class="absolute inset-y-1/4 bg-white w-10 h-8 flex justify-center items-center rounded-md z-20"
      style="right: -10px"
    >
      <i class="fas fa-calendar"></i>
    </div>
    <slide-menu v-show="isMenuOpen" :openMenu="openMenu" />
  </header>
</template>

<script>
import slideMenu from './slideMenu.vue'
export default {
  components: { slideMenu },
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

<style></style>
