import tailwindcssAnimated from 'tailwindcss-animated'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      borderRadius: {
        xl: '0.625rem'
      },
      colors: {
        default: {
          100: '#fefcf7',
          150: '#f4f1eb',
          200: '#83888f',
          300: '#333d4b',
          350: '#2c343e'
        },
        primary: {
          100: '#3bb7a9',
          200: '#0e8784'
        },
        secondary: '#fdd6ba'
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['Fraunces Variable', 'serif']
      },
      fontSize: {
        xs: ['0.75rem', '1.25'],
        sm: ['0.9375rem', '1.625'],
        base: ['1rem', '1.625rem'],
        lg: ['1.125rem', '1.5625rem'],
        '3xl': ['1.75rem', '1'],
        '4xl': ['2rem', '1.5'],
        '5xl': ['2.5rem', '1.2'],
        '6xl': ['3rem', '1']
      },
      letterSpacing: {
        widest: '0.07691666em'
      },
      screens: {
        '@md': { min: '640px', max: '1023px' },
        '@lg': { min: '640px', max: '1279px' }
      },
      spacing: Object.fromEntries(
        Array.from({ length: 400 }, (_, index) => {
          const key = index * 0.5
          return [key, `${key / 4}rem`]
        })
      )
    }
  },
  plugins: [tailwindcssAnimated]
}

export default config
