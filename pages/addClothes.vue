<template>
  <div
    class="w-full h-full flex flex-col px-8 py-11 space-y-7 shadow-xl rounded-2xl bg-white"
  >
    <div
      class="relative bg-[#c4c4c4] h-[4.75rem] rounded-[10px] text-[#4A4A4AC7] text-sm font-black flex justify-center items-center"
    >
      <input
        ref="imgRef"
        type="file"
        name="img"
        class="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
          clip-rule="evenodd"
        />
      </svg>

      <span class="ml-3.5">Add Image</span>
    </div>
    <div
      class="mt-3 bg-[#EEEEEE] border-4 border-[#c4c4c4] h-[4.75rem] rounded-[10px] text-[#AEAEAE] text-base font-medium flex items-center"
    >
      <span class="ml-3.5">Dress Title</span>
    </div>
    <div class="flex gap-x-3.5 text-white">
      <div
        class="h-[4.625rem] flex-1 flex justify-center items-center bg-[#1C5522] rounded-[10px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span class="ml-2.5 font-black"> Done </span>
      </div>
      <div class="flex-1 bg-[#3E2B30] rounded-[10px]">
        <nuxt-link
          to="/dashboard"
          class="h-full flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span class="ml-2.5 font-black"> Cancel </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddClothes',
  layout: 'main',
}
</script>

<style></style>
