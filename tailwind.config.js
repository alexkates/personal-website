const colors = require('tailwindcss/colors');
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.blueGray,
        },
        extend: {
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '15%': { transform: 'rotate(14.0deg)' },
                    '30%': { transform: 'rotate(-8.0deg)' },
                    '40%': { transform: 'rotate(14.0deg)' },
                    '50%': { transform: 'rotate(-4.0deg)' },
                    '60%': { transform: 'rotate(10.0deg)' },
                    '70%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                }
            },
            animation: {
                wave: 'wave 1.5s infinite'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}