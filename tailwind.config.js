module.exports = {
	purge: [],
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				light: "url('https://image.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg')",
				dark: "url('https://image.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg')",
			}),
			screens: {
				xs: '320px',
				sm: '640px',
				// => @media (min-width: 640px) { ... }

				md: '768px',
				// => @media (min-width: 768px) { ... }

				lg: '1024px',
				// => @media (min-width: 1024px) { ... }

				xl: '1280px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }
			},
		},
	},
	variants: {
		extend: {
			backgroundImage: ['dark'],
		},
	},
	plugins: [],
};
