<template>
  <div
    class="bg-white h-full rounded-3xl rounded-t-none px-5 overflow-y-auto relative"
  >
    <div class="flex justify-center p-2 my-2">
      <p
        class="p-1 px-2 bg-caGray text-xs rounded-md shadow-md text-caLightGray"
      >
        Monday 12th
      </p>
    </div>
    <div class="grid grid-cols-12 bg-caMidGray rounded-lg">
      <div class="col-span-1 rounded-lg rounded-r-none">
        <img src="~static/images/hmgoepprod.png" alt="" class="w-full h-full" />
      </div>
      <div class="col-span-10 p-1">
        <p>Black casual top with round neck</p>
      </div>
      <div class="col-span-1 bg-caGray rounded-lg rounded-l-none text-center">
        <i
          class="fas fa-times transform translate-y-5 text-caTextLight text-2xl"
        ></i>
      </div>
    </div>
    <transition mode="in-out" name="route">
      <slide-menu v-show="isMenuOpen" :open-menu="openMenu" />
    </transition>
  </div>
</template>

<script>
import slideMenu from './slideMenu.vue'
export default {
  components: { slideMenu },
  props: {
    isMenuOpen: Boolean,
    // eslint-disable-next-line vue/require-default-prop
    openMenu: Function,
  },
  data() {
    return {}
  },
}
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.1s ease-in-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>
