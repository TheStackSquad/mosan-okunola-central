// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Defines a custom font family named 'header'
        header: ["var(--font-montserrat-alternates)"],
        // Defines a custom font family named 'body'
        body: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
