/* eslint-disable no-undef */
const px1000 = Array.from({ length: 1000 }, (_, idx) => idx + 1);
const pxToRem = (px, base = 16) => `${px / base}rem`;
const rem1000 = px1000.reduce((acc, px) => ({ ...acc, [px]: pxToRem(px) }), { 0: '0rem' });

const px10000 = Array.from({ length: 10000 }, (_, idx) => idx + 1);

/** @type {import('tailwindcss').Config} */
export default {
    future: {
        hoverOnlyWhenSupported: true
    },
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    // Toggle dark-mode based on .dark class or data-mode="dark"
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            fontFamily: {
                inherit: 'inherit',
                pretendard: ['Pretendard', 'sans-serif']
            },
            fontSize: {
                ...rem1000,
                h1: [pxToRem(72), { lineHeight: 'normal', fontWeight: 700, letterSpacing: 'normal' }],
                h2: [pxToRem(60), { lineHeight: 'normal', fontWeight: 700, letterSpacing: 'normal' }],
                h3: [pxToRem(48), { lineHeight: 'normal', fontWeight: 700, letterSpacing: 'normal' }],
                h4: [pxToRem(36), { lineHeight: 'normal', fontWeight: 600, letterSpacing: 'normal' }],
                h5: [pxToRem(24), { lineHeight: 'normal', fontWeight: 600, letterSpacing: 'normal' }],
                h6: [pxToRem(18), { lineHeight: 'normal', fontWeight: 600, letterSpacing: 'normal' }],
                b24: [pxToRem(24), { lineHeight: 'normal', fontWeight: 500, letterSpacing: 'normal' }],
                b18: [pxToRem(18), { lineHeight: 'normal', fontWeight: 500, letterSpacing: 'normal' }],
                b16: [pxToRem(16), { lineHeight: 'normal', fontWeight: 400, letterSpacing: 'normal' }],
                b14: [pxToRem(14), { lineHeight: 'normal', fontWeight: 400, letterSpacing: 'normal' }],
                b12: [pxToRem(12), { lineHeight: 'normal', fontWeight: 400, letterSpacing: 'normal' }],
                c11: [pxToRem(11), { lineHeight: 'normal', fontWeight: 400, letterSpacing: 'normal' }],
                c8: [pxToRem(8), { lineHeight: 'normal', fontWeight: 400, letterSpacing: 'normal' }]
            },
            fontWeight: {
                inherit: 'inherit'
            },
            spacing: {
                ...rem1000
            },
            width: {
                ...rem1000,
                inherit: 'inherit'
            },
            height: {
                ...rem1000,
                inherit: 'inherit'
            },
            maxWidth: {
                ...rem1000,
                inherit: 'inherit'
            },
            maxHeight: {
                ...rem1000,
                inherit: 'inherit'
            },
            minWidth: {
                ...rem1000,
                inherit: 'inherit'
            },
            minHeight: {
                ...rem1000,
                inherit: 'inherit'
            },
            lineHeight: {
                ...rem1000,
                inherit: 'inherit'
            },
            zIndex: {
                ...px10000.reduce((acc, px) => ({ ...acc, [px]: `${px}` }), {})
            },
            strokeWidth: {
                4: '4px'
            },
            boxShadow: {
                '01': '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
                '02': '1px 1px 10px 1px #e3ecfb',
                '03': '0px 0px 8px 0px #eeeeee',
                '04': '5px 5px 5px 5px rgba(0,0,0,0.2), -7px 1px 11px 1px rgba(0,0,0,0.14), 0px -6px 14px -10px rgba(0,0,0,0.12)',
                inset01: 'inset 0px -1px 0px 0px #eeeeee'
            },
            colors: {
                primary: {
                    50: '#f1f6fe',
                    100: '#e3ecfb',
                    200: '#c0d9f7',
                    300: '#89baf0',
                    400: '#4a97e6',
                    500: '#2279d5',
                    600: '#145cb1', // main
                    700: '#124b92',
                    800: '#134079',
                    900: '#153865',
                    950: '#0e2343'
                },
                secondary: {
                    50: '#f0f7ff',
                    100: '#dfeeff',
                    200: '#b8ddff',
                    300: '#79c2ff',
                    400: '#32a3fe',
                    500: '#0788f0',
                    600: '#006acd', // main
                    700: '#0053a6',
                    800: '#034787',
                    900: '#093d71',
                    950: '#06264b'
                },
                tertiary: {
                    50: '#f2f7fc',
                    100: '#e1edf8',
                    200: '#cae0f3',
                    300: '#a5cdeb',
                    400: '#8bbce4', // main
                    500: '#5b97d6',
                    600: '#467dca',
                    700: '#3d6ab8',
                    800: '#365797',
                    900: '#304a78',
                    950: '#212f4a'
                },
                'blue-gray': {
                    50: '#f4f8fa',
                    100: '#e7eef2',
                    200: '#d4e0e9',
                    300: '#b7ccd9',
                    400: '#94b2c6',
                    500: '#85a3bd',
                    600: '#6886a8', // main
                    700: '#5c7699',
                    800: '#4f617e',
                    900: '#425266',
                    950: '#2c333f'
                },
                gray: {
                    50: '#f8f8f8',
                    100: '#eeeeee', // main
                    200: '#dcdcdc',
                    300: '#bdbdbd',
                    400: '#989898',
                    500: '#7c7c7c',
                    600: '#656565',
                    700: '#525252',
                    800: '#464646',
                    900: '#3d3d3d',
                    950: '#292929'
                },
                pastel: {
                    '01': '#2178ae',
                    '02': '#ed8e83',
                    '03': '#fac92c',
                    '04': '#cfe5cc',
                    '05': '#AEDCF8',
                    '06': '#f7b0be',
                    '07': '#00bcb4',
                    '08': '#D4BBD6',
                    '09': '#D9E5AB',
                    10: '#F2967C',
                    11: '#CBD1EF',
                    12: '#F08FB0'
                }
            },
            keyframes: {
                stroke: {
                    '0%': {
                        strokeDashoffset: 350
                    },
                    '50%': {
                        strokeDashoffset: 0
                    },
                    '100%': {
                        strokeDashoffset: 350
                    }
                },
                blink: {
                    '0%': {
                        opacity: 0.4
                    },
                    '50%': {
                        opacity: 1
                    },
                    '100%': {
                        opacity: 0.4
                    }
                },
                fadeIn: {
                    '0%': {
                        bottom: 0,
                        opacity: 0
                    },
                    '100%': {
                        bottom: 30,
                        opacity: 1
                    }
                },
                fadeOut: {
                    '0%': {
                        bottom: 30,
                        opacity: 1
                    },
                    '100%': {
                        bottom: 0,
                        opacity: 0
                    }
                }
            },
            animation: {
                stroke: 'stroke 3s infinite',
                blink: 'blink 2s ease-in-out infinite',
                fadeInOut: 'fadeIn 0.5s, fadeOut 0.5s 4.5s forwards'
            },
            screens: {
                mobile: '321px',
                tablet: '769px',
                laptop: '1281px',
                desktop: '1513px',
                '4k': '1920px',
                'under-tablet': { max: '768px' },
                'under-mobile': { max: '320px' }
            }
        }
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        function ({ addVariant }) {
            addVariant('child-svg', '& svg');
        }
    ]
};
