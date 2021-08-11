<template>
  <div class="home w-full h-full flex justify-center pt-12">
    <div class="w-6/12 h-full flex flex-col">
      <header
        class="bg-caLightGray rounded-3xl rounded-b-none p-4 text-center relative"
      >
        <div
          class="absolute inset-y-1/4 bg-white w-10 h-8 flex justify-center items-center rounded-md"
          style="left: -10px"
        >
          <i class="fas fa-bars"></i>
        </div>
        <p class="text-transBlack font-medium">Monday 12th - Thursday 16th</p>
        <div
          class="absolute inset-y-1/4 bg-white w-10 h-8 flex justify-center items-center rounded-md"
          style="right: -10px"
        >
          <i class="fas fa-calendar"></i>
        </div>
      </header>
      <div class="bg-white h-9/10 rounded-3xl rounded-t-none">Hello</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.home {
  background-image: url('~static/images/desktop bg.png');
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat, repeat;
  background-size: cover;
}
</style>
