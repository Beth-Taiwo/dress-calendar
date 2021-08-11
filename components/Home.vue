<template>
  <div class="home w-full h-full flex justify-center pt-12">
    <div class="w-6/12 h-full flex flex-col shadow-md">
      <top-menu />
      <cloth-preview />
    </div>
  </div>
</template>

<script>
import ClothPreview from './clothPreview.vue'
import topMenu from './topMenu.vue'
export default {
  components: { topMenu, ClothPreview },
}
</script>

<style>
.home {
  background-image: url('~static/images/desktop_bg.png');
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-color: #adaaaa;
}
</style>
