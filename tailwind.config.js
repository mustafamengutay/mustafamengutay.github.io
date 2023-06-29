/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        screens: {
            sm: '431px',
        },
        extend: {},
        fontFamily: {
            "serif": ["Inter",],
        },
        fontSize: {
            base: '1.6rem',
            lg: '2rem',
        },

    },
    plugins: [require('tailwindcss-animated')],
};