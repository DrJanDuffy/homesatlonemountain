/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',
        secondary: '#3A8DDE',
        accent: '#16B286',
        background: '#F7F9FC'
      }
    },
  },
  plugins: [],
} 