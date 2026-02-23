import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            primary: {
                DEFAULT: "#d5900a", // Primary Gold
                light: "#f3d567",
                dark: "#b48c08",
            },
            accent: {
                DEFAULT: "#d5900a",
                hover: "#b48c08",
                light: "#f3d567",
            },
            highlight: {
                DEFAULT: "#d5900a",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "gradient-x": "gradient-x 5s ease infinite",
                "spin-slow": "spin 20s linear infinite",
                "spin-reverse-slow": "spin-reverse 20s linear infinite",
            },
            keyframes: {
                "gradient-x": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
                "spin-reverse": {
                    "from": { transform: "rotate(360deg)" },
                    "to": { transform: "rotate(0deg)" },
                }
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
