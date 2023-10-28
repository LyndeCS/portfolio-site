/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				smoke: {
					100: "#2b2b36",
					300: "#1d1d24",
					500: "#141419",
					700: "#0e0e12",
				},
				shark: {
					300: "#3D3E43",
					400: "#303133",
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
			boxShadow: {
				inner2: "inset 0 0 0 1px rgb(0 0 0 / 0.05)",
			},
			screens: {
				xs: "480px",
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
