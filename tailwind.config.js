import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ...flowbite.content(),
  ],

  theme: {
    extend: {
      boxShadow: {
        "inset-custom": "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(180deg, rgba(204, 232, 254, 0.35) 0%, rgba(205, 160, 255, 0.35) 24%, rgba(132, 137, 245, 0.35) 40%, rgba(132, 137, 245, 0.35) 71%, rgba(181, 145, 233, 0.35) 100%)",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },

  plugins: [
    flowbite.plugin(),
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
