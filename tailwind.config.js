/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            xs: '500px',
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
                persimmon: {
                    50: 'oklch(97.30% 0.01 28.86)',
                    100: 'oklch(94.38% 0.03 31.13)',
                    200: 'oklch(89.76% 0.05 32.36)',
                    300: 'oklch(83.05% 0.10 32.75)',
                    400: 'oklch(72.65% 0.17 33.57)',
                    500: 'oklch(67.57% 0.20 33.64)',
                    600: 'oklch(61.25% 0.21 33.30)',
                    700: 'oklch(53.72% 0.18 33.38)',
                    800: 'oklch(47.24% 0.16 33.59)',
                    900: 'oklch(42.03% 0.13 33.70)',
                    950: 'oklch(27.29% 0.08 33.52)',
                },
                'sea-buckthorn': {
                    50: 'oklch(97.91% 0.02 78.24)',
                    100: 'oklch(94.10% 0.05 77.64)',
                    200: 'oklch(88.10% 0.10 76.53)',
                    300: 'oklch(79.81% 0.16 67.52)',
                    400: 'oklch(76.27% 0.17 59.64)',
                    500: 'oklch(69.61% 0.19 46.37)',
                    600: 'oklch(60.84% 0.19 39.08)',
                    700: 'oklch(51.50% 0.18 34.77)',
                    800: 'oklch(43.97% 0.15 32.92)',
                    900: 'oklch(38.67% 0.13 32.99)',
                    950: 'oklch(26.06% 0.09 33.71)',
                },
                reef: {
                    50: 'oklch(98.43% 0.03 141.99)',
                    100: 'oklch(96.35% 0.06 143.70)',
                    200: 'oklch(93.67% 0.12 142.90)',
                    300: 'oklch(89.30% 0.21 142.51)',
                    400: 'oklch(84.07% 0.26 142.27)',
                    500: 'oklch(77.38% 0.26 142.33)',
                    600: 'oklch(67.34% 0.23 142.33)',
                    700: 'oklch(56.17% 0.19 142.34)',
                    800: 'oklch(47.47% 0.15 142.37)',
                    900: 'oklch(41.12% 0.13 142.52)',
                    950: 'oklch(27.82% 0.09 142.50)',
                },
                portage: {
                    50: 'oklch(95.92% 0.02 273.24)',
                    100: 'oklch(92.53% 0.04 275.35)',
                    200: 'oklch(86.28% 0.07 275.69)',
                    300: 'oklch(76.14% 0.12 276.44)',
                    400: 'oklch(66.47% 0.18 277.99)',
                    500: 'oklch(57.45% 0.22 277.76)',
                    600: 'oklch(50.97% 0.24 277.80)',
                    700: 'oklch(45.65% 0.22 277.84)',
                    800: 'oklch(39.79% 0.19 278.47)',
                    900: 'oklch(35.69% 0.14 279.80)',
                    950: 'oklch(25.60% 0.09 282.97)',
                },
            },
        },
    },
    plugins: [],
};