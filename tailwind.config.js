/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				smoke: {
					500: "#141419",
				},
				shark: {
					300: "#3D3E43",
					500: "#2D2E32",
					700: "#252629",
				},
				meadow: {
					100: "#B9ECE0",
					300: "#18D8A8",
					500: "#15C196",
					700: "#14B990",
				},
			},
			backgroundImage: {
				"navbar-bg": "url('/src/assets/bg/3.jpg')",
			},
		},
	},
	plugins: [],
};
