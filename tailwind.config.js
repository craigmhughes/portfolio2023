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
        extend: {
            colors: {
                midnight: '#191d24',
                daylight: '#a6adbb',
                ice: '#F7F7F9',
                kite: '#256EFF',
                regal: '#46237A',
                emerald: '#3DDC97',
                folly: '#FF495C',
                daisy: '#F7E733',
                salmon: '#E86A92',
                rust: '#EB5E28',
            },
        },
    },
    plugins: [require('daisyui')],
};
