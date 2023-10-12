/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'primary-green': '#3A5B22',
                'ungu': '#5D50C6',
                'pink': '#F85E9F',
                'orange': "#FF5722",
                "grey": "#19182580"
            },
            fontFamily: {
                'sans': ['Poppins', "sans-serif", ...defaultTheme.fontFamily.sans],
                'inter': ['Inter', "sans-serif", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
