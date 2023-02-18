/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
          extend: {
               fontFamily: {
                    'openSans': ['Open Sans', 'sans-serif'],
                    'poppins': ['Poppins', 'sans-serif'],
                    'sourceSansPro': ['Source Sans Pro', 'sans-serif'],
               },
          },
     },
     plugins: [],
}
