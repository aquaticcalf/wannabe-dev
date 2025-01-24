/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    safelist: [
        'bg-red-400',
        'bg-orange-400',
        'bg-sky-400',
        'bg-green-400',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
