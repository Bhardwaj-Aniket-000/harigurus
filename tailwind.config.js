/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.html", "./src/**/*.html"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["londrinaRegular", "sans-serif"],
				philosphir: ["philospher", "sans-serif"],
			},
			screens: {
				tablet: "900px",
			},
		},
	},
	plugins: [],
};
