<template>
  <div class="bg-black bg-opacity-40 text-white px-5 py-10 rounded-md">
    <h1 class="text-center">Please Login</h1>
    <form @submit.prevent="login">
      <div class="form-control" @click="onFocus">
        <input type="text" required />
        <label for="email">Email</label>
      </div>
      <div class="form-control">
        <input type="password" required />
        <label for="password">Password</label>
      </div>

      <button
        type="submit"
        class="bg-white text-black p-3.5 text-xl w-full border-0 rounded-md hover:bg-gray-900 hover:text-white"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    onFocus() {
      const labels = document.querySelectorAll('.form-control label')
      labels.forEach((label) => {
        // eslint-disable-next-line unicorn/prefer-text-content
        label.innerHTML = label.innerText
          .split(' ')
          .map(
            (letter, i) =>
              `<span style="transtion-delay:${i * 50}ms">${letter}</span>`
          )
          .join('')

        // console.log(label.innerHTML)
      })
    },
    login() {
      this.$router.push('/dashboard')
    },
  },
}
</script>

<style scoped>
.form-control {
  margin: 20px 0 40px;
  position: relative;
  width: 300px;
}

.form-control input {
  background: transparent;
  border: 0;
  border-bottom: 2px solid #fff;
  color: #fff;
  font-size: 1.125rem;
  display: block;
  width: 100%;
  padding: 0.9375rem 0;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: #ffc600;
}
.form-control label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
}
.form-control input:focus + label span,
.form-control input:valid + label span {
  color: #ffc600;
  transform: translateY(-30px);
}
.form-control label span {
  display: inline-block;
  font-size: 1.125rem;
  min-width: 5px;
  transition: all 0.3s ease-in-all;
}
</style>
