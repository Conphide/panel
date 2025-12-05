const colors = require('tailwindcss/colors');

const gray = {
    50: '#f0faff',
    100: '#cceeff',
    200: '#99ddff',
    300: '#55bbf0',
    400: '#2299dd',
    500: '#0077be',
    600: '#005588',
    700: '#1a2639', // Dark blue-grey
    800: '#111825', // Darker
    900: '#0a0e14', // Almost black
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"Orbitron"', 'sans-serif'],
                sans: ['"Rajdhani"', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: '#05070a',
                primary: {
                    ...colors.cyan,
                    400: '#00e5ff',
                    500: '#00b8d4',
                    600: '#0091a8',
                },
                gray: gray,
                neutral: gray, // Remap neutral to our new dark tech palette
                cyan: colors.cyan,
                "exodus-cyan": "#00f3ff",
                "exodus-green": "#0aff0a",
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
            boxShadow: {
                'neon-cyan': '0 0 5px theme("colors.exodus-cyan"), 0 0 10px theme("colors.exodus-cyan")',
                'neon-green': '0 0 5px theme("colors.exodus-green"), 0 0 10px theme("colors.exodus-green")',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
