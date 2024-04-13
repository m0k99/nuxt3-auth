import type {Config} from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./ui.config/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      colors: {
        'medium-blue': '#1E27B7',
        'vivid-black': '#010101',
        'light-gray': '#D3D3D3'
      },
      spacing: {
        '15': '3.75rem'
      }
    },
    screens: {
      'xxs': '376px',
      'xs': '576px',
      'sm': '770px',
      'md': '990px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
} satisfies Config
