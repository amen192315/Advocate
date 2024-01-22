/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    screens:{ 
      lg: {'max': '1200px'},
      md: {'max': '992px'},
      sm: {'max': '768px'},
      xs: {'max': '478px'},
  }, 


  extend: { 
    colors:{ 
      lightBlue:'#4F8FF0', 
      lightBlack:'#222222', 
    } 
  }, 
}, 
plugins: [], 
}

