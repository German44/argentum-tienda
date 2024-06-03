/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        fondo:
          "url('https://img.freepik.com/free-vector/abstract-oily-background-light-pink_23-2148827714.jpg?t=st=1717444186~exp=1717447786~hmac=70b790b17429ffef81f8350d0b448d2d99b9feee8a36f84766080b57ed1d90b6&w=1380')",
      },
      fontFamily: {
        poetsen: ["Poetsen One", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/aspect-ratio')
  ],
  /* Uncomment this section if you need a prefix for DaisyUI classes
  daisyui: {
    prefix: "daisy-",
  },
  */
  darkMode: "class",
};
