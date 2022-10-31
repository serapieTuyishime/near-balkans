/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],

    theme: {
        extend: {
            colors: {
                dark: "#3f3f46",
            },
            spacing: {
                18: "4.5rem",
                26: "6.5rem",
            },
            fontSize: {
                xl: [
                    "1.375rem",
                    {
                        lineHeight: "1.8rem",
                    },
                ],
                "3xl": [
                    "2rem",
                    {
                        lineHeight: "2.2rem",
                    },
                ],
            },
            backgroundImage: {
                purpleRadial:
                    "radial-gradient(farthest-side at 50% 0%,#F2EBFF 0,rgba(127,208,231,0) 100%)",
                fullRadial:
                    "radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)",
                greenRadial:
                    "radial-gradient(50% 50% at 50% 50%,#7bdde2 0,rgba(123,221,226,0) 100%)",
                fullgreenRadial:
                    "radial-gradient(farthest-side at 50% 0%,#7bdde2 0,rgba(123,221,226,0) 100%)",
            },
        },
    },
    plugins: [],
};
