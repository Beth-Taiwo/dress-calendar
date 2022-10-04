module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    extend: {
      spacing: {
        main: '40rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
