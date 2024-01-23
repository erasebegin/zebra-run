/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'rubik': ['"Rubik Burned"', "serif"],
				'atkinson': ['"Atkinson Regular"', "serif"],
				'quicksand': ['Quicksand', 'sans-serif']
			},
		},
	},
	plugins: [],
}