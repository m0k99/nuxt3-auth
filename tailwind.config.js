/** @type {import('tailwindcss').Config} */
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
            // => @media (min-width: 376px) { ... }

            'xs': '576px',
            // => @media (min-width: 576px) { ... }

            'sm': '770px',
            // => @media (min-width: 770px) { ... }

            'md': '990px',
            // => @media (min-width: 990px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    },
    plugins: [],
}

