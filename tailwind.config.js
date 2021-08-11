module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  theme: {
    extend: {
      fontSize: {
        micro: ['0.65rem', '0.90rem'],
      },
      height: {
        100: '25rem',
        '9/10': '90%',
        '7/10': '70%',
      },
      colors: {
        caLightGray: '#EFEFEF',
        caMidGray: '#F4F4F4',
        caGray: '#4A4A4A',
        caGreen: '#1c5522',
        caDarkGray: '#3E2B30',
        ca: '#0F0F0F',
        cared: '#FF1515',
        caTextLight: 'rgba(202,202,202,1)',
        caOffWhite: '#f9f9f9',
        transBlack: 'rgba(0, 0, 0, 0.5)',
      },
      inset: {
        '1/2': '50%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
        '1/20': '5%',
        92: '23rem',
      },
      outline: {
        blue: '2px solid #0000ff',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    cursor: ['responsive', 'hover', 'focus', 'disabled'],
    backgroundColor: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
}
