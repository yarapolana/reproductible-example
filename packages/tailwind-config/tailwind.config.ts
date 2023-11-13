import type { Config } from 'tailwindcss'

export default {
  content: [
    // app content
    `./src/**/*.{js,ts,jsx,tsx}`,
    `./app/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#33343F",
        brandorange: "#FF4A01",
        "brandorange-dark": "#B43604",
        brandblack: "#33343F",
        brandborder: "#ECEDF1",
        brandidle: "#ECEDF1",
        branddarkgray: "#71737F",
        brandlightgray: "#DBDDE5",
        brandgray: "#D3D4E0",
        brandtextgray: "#B5B6C4",
        brandshadow: "#33343F",
      },
      fontFamily: {
        "sans": ["Raleway", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      // box-shadow: 0 10px 20px 20px rgba(51,52,63,0.10);
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar')
    // require('@tailwindcss/typography'),
  ],
} satisfies Config
