module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		fontFamily: {
			kaushan: ["Kaushan Script"],
		},
		extend: {
			colors: {
				green: {
					DEFAULT: "#00f260",
				},
				textGray: {
					DEFAULT: "#F8F8F8",
					100: "#CCCCCC",
					200: "#C5C5C5",
					300: "#D0D0D0",
				},
				dark: {
					DEFAULT: "#010101",
					100: "#151e2d",
					200: "#1d293a",
					300: "#16181d",
					500: "#011115",
					700: "#202125",
				},
			},
		},
	},

	variants: {
		extend: {},
	},
	plugins: [],
};
