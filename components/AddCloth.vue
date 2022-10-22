<template>
  <div>
    <div class="w-64 h-60 mx-auto">
      <div class="relative w-full h-full text-[#4A4A4AC7] text-sm font-black">
        <div
          v-if="form.image === null"
          class="flex justify-center items-center h-full w-full rounded-[10px] bg-[#c4c4c4]"
        >
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
          v-else
          class="bg-transparent w-full h-full overflow-hidden border rounded-[10px] flex justify-center items-center"
        >
          <img
            ref="imgRef"
            :src="form.image"
            alt="an image"
            class="object-cover h-full w-full"
          />
        </div>
        <input
          ref="inputRef"
          type="file"
          name="img"
          class="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
          @change="previewFile"
        />
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
    <div class="space-x-5 mb-3">
      <select
        v-model="form.color"
        class="select border-[#c4c4c4] border-4 w-full max-w-[150px]"
      >
        <option value="" disabled selected>Color</option>
        <option
          v-for="(dColor, index) in dressColor"
          :key="index"
          :value="dColor"
        >
          {{ dColor }}
        </option>
      </select>
      <select
        v-model="form.type"
        class="select border-[#c4c4c4] border-4 w-full max-w-[150px]"
      >
        <option value="" disabled selected>Cloth type</option>

        <option v-for="(dType, index) in dressType" :key="index" :value="dType">
          {{ dType }}
        </option>
      </select>
    </div>
    <!-- tags -->
    <div class="flex gap-x-2 mb-3">
      <input
        v-model="clothTag"
        type="text"
        placeholder="Add a tag. ex: casual"
        class="input h-14 border-4 border-[#c4c4c4] flex-1"
      />
      <button
        class="bg-[#1C5522] text-white rounded-[10px] w-14"
        @click="addTag"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
    </div>
    <div class="w-full flex flex-wrap gap-2.5 mb-3">
      <div
        v-for="(dTag, index) in form.clothTags"
        :key="index"
        class="w-40 h-9 bg-[#4A4A4A] rounded-[7px] flex items-center justify-between overflow-hidden"
      >
        <div class="flex-1 text-white ml-2 truncate">{{ dTag }}</div>
        <button
          class="w-9 h-9 bg-[#0F0F0F] text-white rounded-r-[7px] flex items-center justify-center"
          @click="removeTag(index)"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
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
      dressColor: ['Margenta', 'Lilac', 'Orange', 'Pink', 'White'],
      dressType: ['Shirt', 'Skirt', 'Trouser', 'Jean', 'Blouse'],
      clothTag: '',
      form: {
        desp: null,
        image: null,
        color: '',
        type: '',
        clothTags: [],
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
    previewFile(e) {
      e.preventDefault()
      const file = e.target.files[0]
      const img = URL.createObjectURL(file)
      this.form.image = img
    },
    addTag() {
      this.form.clothTags.push(this.clothTag)
    },
    removeTag(id) {
      this.form.clothTags = this.form.clothTags.filter(
        (elem, index) => index !== id
      )
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
