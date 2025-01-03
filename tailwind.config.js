import scrollbarHide from 'tailwind-scrollbar-hide';

const px1000 = Array.from({ length: 1000 }, (_, idx) => idx + 1);
const pxToRem = (px, base = 16) => `${px / base}rem`;
const rem1000 = px1000.reduce((acc, px) => ({ ...acc, [px]: pxToRem(px) }), { 0: '0rem' });

const spacing1000 = px1000.reduce((acc, px) => ({ ...acc, [px / 4]: pxToRem(px) }), { 0: '0rem' });
const px10000 = Array.from({ length: 10000 }, (_, idx) => idx + 1);

/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./lib/**/*.{js,ts,jsx,tsx,mdx}', './stories/**/*.{js,ts,jsx,tsx}'],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        inherit: 'inherit',
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        ...rem1000,
      },
      fontWeight: {
        inherit: 'inherit',
      },
      minHeight: {
        inherit: 'inherit',
        ...spacing1000,
      },
      height: {
        inherit: 'inherit',
        ...spacing1000,
      },
      maxHeight: {
        inherit: 'inherit',
        ...spacing1000,
      },
      width: {
        inherit: 'inherit',
        ...spacing1000,
      },
      minWidth: {
        inherit: 'inherit',
        ...spacing1000,
      },
      maxWidth: {
        inherit: 'inherit',
        ...spacing1000,
      },
      padding: {
        ...spacing1000,
      },
      margin: {
        ...spacing1000,
      },
      borderRadius: {
        ...spacing1000,
      },
      spacing: {
        ...spacing1000,
      },
      lineHeight: {
        ...rem1000,
        inherit: 'inherit',
      },
      zIndex: {
        ...px10000.reduce((acc, px) => ({ ...acc, [px]: `${px}` }), {}),
      },
      boxShadow: {
        '01': '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        '02': '1px 1px 10px 1px #e3ecfb',
        '03': '0px 0px 8px 0px #eeeeee',
        '04': '5px 5px 5px 5px rgba(0,0,0,0.2), -7px 1px 11px 1px rgba(0,0,0,0.14), 0px -6px 14px -10px rgba(0,0,0,0.12)',
        inset01: 'inset 0px -1px 0px 0px #eeeeee',
      },
      colors: {
        primary: {
          50: '#fcfde9',
          100: '#f7fbc6',
          200: '#f3f890',
          300: '#f2f351',
          400: '#eee821',
          500: '#dccd14',
          600: '#bfa40f',
          700: '#99770f',
          800: '#7f5f14',
          900: '#6c4d17',
          950: '#3f2909',
        },
        blue: {
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
          950: '#0e2343',
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
          950: '#2c333f',
        },
        'yellow-gray': {
          50: '#f4f4f1',
          100: '#e6e6e1',
          200: '#d0cec6',
          300: '#b3b1a3',
          400: '#989683',
          500: '#83816d',
          600: '#61604f',
          700: '#4c4c3f',
          800: '#3f3e35',
          900: '#373730',
          950: '#1c1c17',
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
          950: '#292929',
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
          12: '#F08FB0',
        },
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: 0.4,
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0.4,
          },
        },
        fadeIn: {
          '0%': {
            bottom: 0,
            opacity: 0,
          },
          '100%': {
            bottom: 30,
            opacity: 1,
          },
        },
        fadeOut: {
          '0%': {
            bottom: 30,
            opacity: 1,
          },
          '100%': {
            bottom: 0,
            opacity: 0,
          },
        },
      },
      animation: {
        blink: 'blink 2s ease-in-out infinite',
        fadeInOut: 'fadeIn 0.5s, fadeOut 0.5s 4.5s forwards',
      },
      screens: {
        mobile: '321px',
        tablet: '769px',
        laptop: '1281px',
        desktop: '1513px',
        '4k': '1920px',
        'under-tablet': { max: '768px' },
        'under-mobile': { max: '320px' },
      },
    },
  },
  plugins: [
    scrollbarHide,
    function ({ addVariant }) {
      addVariant('child-svg', '& svg');
    },
  ],
};
