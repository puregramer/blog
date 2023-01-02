/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],
    theme: {
        extend: {
            keyframes: {
                EnterPopup: {
                    'From': {transform: 'scale(0.9)', opacity:0},
                    'To': {transform: 'scale(1)', opacity:1},
                },
                LeavePopup: {
                    'From': {transform: 'scale(1)', opacity:1},
                    'To': {transform: 'scale(0.95)', opacity:0},
                }
            }
        },
    },
    plugins: [],
}
