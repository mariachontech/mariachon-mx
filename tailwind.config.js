/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: [
		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"mariachon-blueDark": "#010A30",
				"mariachon-blueLight": "#05117F",
				"mariachon-red": "#960909",
				"mariachon-orange": "#E66400",
			},
			fontFamily: {
				sans: ["sans-serif", ...defaultTheme.fontFamily.sans],
				comforta: ["Comfortaa", "cursive"],
			},
		},
	},
	plugins: [],
}
