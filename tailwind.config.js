/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"album-cover": "url('/panic-panini-album.jpg')",
				"incoming-shows": "url('/coming-shows-bg.jpg')",
				"hero-pattern": "url('/pattern.png')",
			},
			fontFamily: {
				permanentMarker: ["Permanent Marker", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				rockSalt: ["Rock Salt", "sans-serif"],
			},
			colors: {
				"fluo-green": "#43ffb6",
				"yellow-btn-primary": "#ffc621",
				"medium-gray": "#bebebe",
			},
			boxShadow: {
				"centered-shadow": "0px 0px 19px 4px rgba(0,0,0,0.1)",
			},
			keyframes: {
				slideUp: {
					"0%": { transform: "translateY(80px)" },
					"100%": { transform: "translateY(0px)" },
				},
			},
			animation: {
				slideUp: "slideUp ease .3s forwards 1.2s",
			},
		},
	},
	plugins: [],
};
