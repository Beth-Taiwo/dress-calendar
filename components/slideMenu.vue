<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <div
      class="absolute top-0 left-0 w-1/2 max-h-screen py-6 bg-white shadow-xl overflow-y-auto"
    >
      <div class="px-4 sm:px-6">
        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
          Panel title
        </h2>
      </div>
      <div class="mt-6 relative flex-1 px-4 sm:px-6">
        <!-- Replace with your content -->
        <div class="absolute inset-0 px-4 sm:px-6">
          <div
            class="h-full border-2 border-dashed border-gray-200"
            aria-hidden="true"
          ></div>
        </div>
        <!-- /End replace -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  props: {
    openMenu: {
      type: Function,
    },
  },
  methods: {
    closeOpenModal() {
      return (this.open = !this.open)
    },
  },
}
</script>

<style></style>
