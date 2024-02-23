/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                portafino: {
                    50: 'oklch(99.12% 0.03 106.91)',
                    100: 'oklch(97.95% 0.10 107.53)',
                    200: 'oklch(96.58% 0.14 106.46)',
                    300: 'oklch(93.91% 0.18 104.23)',
                    400: 'oklch(90.20% 0.18 98.88)',
                    500: 'oklch(83.67% 0.17 94.10)',
                    600: 'oklch(71.50% 0.15 84.72)',
                    700: 'oklch(58.06% 0.12 74.72)',
                    800: 'oklch(49.63% 0.10 69.83)',
                    900: 'oklch(43.75% 0.09 65.14)',
                    950: 'oklch(29.55% 0.06 60.58)',
                },
            },
        },
    },
    plugins: [],
};
