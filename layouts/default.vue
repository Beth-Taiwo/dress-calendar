<template>
  <div class="w-screen h-screen py-8 items-center overflow-hidden bg-main">
    <div class="shadow-xl w-main h-full mx-auto rounded-2xl bg-gray-100">
      <Nuxt />
    </div>
    <button class="mode-toggle-btn h-6 w-12 rounded-full bg-gray-600 border-4 border-gray-800 fixed bottom-0 right-0 transform -translate-x-10 -translate-y-5"></button>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.bg-main::after {
  content: '';
  width: 200vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
  transform: translateX(0);
  filter: hue-rotate(0deg);

  /* bg */
  @apply bg-white;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%239C92AC' fill-opacity='.15' fill-rule='evenodd'/%3E%3C/svg%3E");
  /* opacity: 0.5; */

  /* animation */
  animation-name: pass;
  animation-duration: 120s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes pass {
  100% {
    filter: hue-rotate(360deg);
    transform: translateX(100vw);
  }
}

.mode-toggle-btn::after {
  @apply w-4;
  @apply h-4;
  @apply bg-gray-900;
  @apply block;
  @apply rounded-full;
  
  content: "";
  transform: scale(0.8);
  margin-left: auto;
}
</style>
