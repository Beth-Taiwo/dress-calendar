<template>
  <div
    class="w-full h-full flex flex-col px-8 py-5 shadow-xl rounded-2xl bg-white"
  >
    <AddCloth />
  </div>
</template>

<script>
import AddCloth from '../components/AddCloth.vue'

export default {
  name: 'AddClothesPage',
  components: { AddCloth },
  layout: 'main',
}
</script>

<style></style>
