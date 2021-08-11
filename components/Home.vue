<template>
  <div class="home w-full h-full flex justify-center pt-12">
    <div class="w-6/12 h-full flex flex-col shadow-md">
      <top-menu />
      <div class="bg-white h-9/10 rounded-3xl rounded-t-none">Hello</div>
    </div>
  </div>
</template>

<script>
import topMenu from './topMenu.vue'
export default {
  components: { topMenu },
}
</script>

<style>
.home {
  background-image: url('~static/images/desktop bg.png');
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-color: #adaaaa;
}
</style>
