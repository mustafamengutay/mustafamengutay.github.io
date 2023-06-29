/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
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