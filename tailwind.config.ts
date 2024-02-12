import type {Config} from 'tailwindcss'

export default {
  content: [],
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
