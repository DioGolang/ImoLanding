import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-source-sans)'],
                serif: ['var(--font-playfair)'],
            },
            colors: {
                brand: {
                    primary: '#1A2E35',
                    gold: '#b89550',
                    'gold-hover': '#a1803c',
                }
            }
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;