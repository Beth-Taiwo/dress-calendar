<template>
  <div
    class="absolute top-0 left-0 w-1/2 h-full py-6 bg-white shadow-xl overflow-y-auto"
  >
    <div class="relative h-full">
      <div class="px-4 sm:px-6 space-y-3">
        <button
          class="bg-caGray p-2 text-caOffWhite rounded-md text-center w-full"
          v-for="item in menuItems"
          :key="item.desc"
        >
          <i :class="item.icon"></i> <span class="ml-2">{{ item.desc }}</span>
        </button>
      </div>
      <div class="absolute bottom-0 w-full text-center">
        <p class="text-caGray">
          Made with <span class="text-cared text-lg">&hearts;</span> by Bee
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { desc: 'Add New CLoth', icon: 'fas fa-plus' },
        { desc: 'View My CLothes', icon: 'fas fa-minus' },
        { desc: 'My Accounts Settings', icon: 'fas fa-plus' },
      ],
    }
  },
  props: {
    openMenu: {
      type: Function,
    },
  },
  methods: {},
}
</script>

<style></style>
