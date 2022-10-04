<template>
  <div
    class="bg-[#4A4A4A] text-[#E5E5E5] text-sm text-center shadow-md rounded-3xl px-2 py-1"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
