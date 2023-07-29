/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#cccccc",
        dark: "#EFEFEF"
      },
      boxShadow: {
        'center': '0 0 10px rgba(0, 0, 0, 0.5)',
      }, 

    },
  },
  plugins: [],
};

