/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				satisfy: ["Satisfy", "cursive"],
				roboto: ["Roboto Slab", "serif"],
			},
			colors: {
				roma1: "hsl(351, 64%, 34%)",
				roma2: "hsl(42, 85%, 60%)",
			},
			backgroundImage: {
				separator: "url('./src/assets/images/separator.png')",
			},
		},
	},
	plugins: [],
};
