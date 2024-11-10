/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'brand-primary': '#1428a0',
				'brand-secondary': '#1c1c1c',
				'brand-accent': '#007aff',
				'bg-primary': '#f8f8f8',
				'bg-secondary': '#f3f3f3',
				'gray-300': '#8d8d8d',
				'gray-400': '#767676',
				'gray-600': '#555555',
			},
		},
	},
	plugins: [],
};
