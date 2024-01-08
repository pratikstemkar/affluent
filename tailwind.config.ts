import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "electric-violet": {
                    "50": "#f5f3ff",
                    "100": "#ece9fe",
                    "200": "#dcd7fd",
                    "300": "#c2b6fc",
                    "400": "#a48df8",
                    "500": "#865ff3",
                    "600": "#773eea",
                    "700": "#682bd6",
                    "800": "#5724b3",
                    "900": "#481f93",
                    "950": "#2b1164",
                },
            },
        },
    },
    plugins: [],
};
export default config;
