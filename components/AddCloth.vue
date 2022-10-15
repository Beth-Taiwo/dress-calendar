<template>
  <div>
    <div class="w-64 mx-auto h-72">
      <div
        class="relative bg-[#c4c4c4] w-full h-full rounded-[10px] text-[#4A4A4AC7] text-sm font-black flex justify-center items-center"
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
    </div>
    <div
      class="my-3 bg-[#EEEEEE] border-4 border-[#c4c4c4] w-full h-28 rounded-[10px] text-[#AEAEAE] text-base font-medium"
    >
      <div
        id="quill-container"
        ref="textEditor"
        class="h-full w-full text-black border-none"
      ></div>
      <div id="toolbar" class="border border-none">
        <!-- Add buttons as you would before -->
        <button class="ql-bold"></button>
        <button class="ql-italic"></button>
        <button class="ql-underline"></button>
      </div>
    </div>
    <div class="flex gap-x-3.5 text-white">
      <div
        class="h-16 flex-1 flex justify-center items-center bg-[#1C5522] rounded-[10px]"
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
import Quill from 'quill'

export default {
  name: 'AddCloth',
  data() {
    return {
      quillContainer: null,
      toolbar: ['bold', 'italic', 'underline'],
      form: {
        desp: null,
      },
    }
  },
  mounted() {
    // initialise quill texter
    this.quillContainer = new Quill(this.$refs.textEditor, {
      modules: {
        toolbar: '#toolbar',
      },
      placeholder: 'Dress Title',
      theme: 'snow',
    })
  },
  methods: {
    AddToCollections() {
      this.form.desp = JSON.stringify(this.quillContainer.getContents())
    },
  },
}
</script>

<style>
#quill-container {
  max-height: 66px;
}
.ql-toolbar.ql-snow {
  border: none !important;
}
</style>
