/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				lora: ["Lora", "serif"],
				satisfy: ["Satisfy", "cursive"],
			},
			colors: {
				roma1: "hsl(351, 64%, 34%)",
				roma: "	hsl(42, 85%, 60%)",
			},
		},
	},
	plugins: [],
};
