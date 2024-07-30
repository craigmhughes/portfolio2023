/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Work Sans', 'ui-sans-serif', 'system-ui'],
            mono: 'Space Mono',
        },
        extend: {},
    },
    plugins: [require('daisyui')],
};
