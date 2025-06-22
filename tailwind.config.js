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
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        inherit: 'inherit',
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
