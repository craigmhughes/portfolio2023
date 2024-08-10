/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: ['DM Sans', 'ui-sans-serif', 'system-ui'],
            mono: ['"Barlow"', 'monospace'],
        },
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': {transform: 'rotate(-1deg)'},
                    '50%': {transform: 'rotate(1deg)'},
                },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
            colors: {
                midnight: '#191d24',
                daylight: '#a6adbb',
                ice: '#F7F7F9',
                kite: '#256EFF',
                regal: '#46237A',
                emerald: '#3DDC97',
                emeraldLight: '#A0EECC',
                emeraldDark: '#188857',
                sky: '#0084ff',
                skyLight: '#e5f2ff',
                skyOvercast: '#cce6ff',
                folly: '#FF495C',
                follyLight: '#ffe7ea',
                daisy: '#F7E733',
                salmon: '#E86A92',
                rust: '#EB5E28',
            },
            breakpoints: {
                lg: '1080px',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light'],
    },
};
