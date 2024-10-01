/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust for your files
  ],
  theme: {
    extend: {
      colors: {
        darkBlack: "#0B0B0B", // Dark black color
        lightGray: "#D3D3D3", // Subtle light gray color
      },
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
