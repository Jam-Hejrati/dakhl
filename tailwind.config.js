import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Vazir', 'sans-serif']
      }
      // colors: {
      //   background: 'hsl(var(--background))',
      //   foreground: 'hsl(var(--foreground))',
      //   btn: {
      //     background: 'hsl(var(--btn-background))',
      //     'background-hover': 'hsl(var(--btn-background-hover))',
      //   },
      // },
    },
  },
  plugins: [nextui()],
}
