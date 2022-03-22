module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}'],
	theme: {
		extend: {
			fontFamily: {
				cormorant: ['Cormorant', 'serif']
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#6419E6',

					secondary: '#D926A9',

					accent: '#1FB2A6',

					neutral: '#191D24',

					'base-100': '#FFFFFF',

					info: '#3ABFF8',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#F87272'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
