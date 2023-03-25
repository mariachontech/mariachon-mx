/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: [
		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["sans-serif", ...defaultTheme.fontFamily.sans],
        comforta: ['Comfortaa', 'cursive']
			
			},
		},
	},
	plugins: [],
}
