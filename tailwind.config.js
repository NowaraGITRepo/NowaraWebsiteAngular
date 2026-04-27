/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#86a4da',
        secondary: '#102C46',
        darkmode: '#111728',
        darklight: '#1a2235',
        darktext: '#a0aec0',
        darkprimary: '#86a4da',
        SlateBlue: '#64748b',
        AliceBlue: '#f0f4f8',
        dark_border: '#2d3748',
        LightApricot: '#fbd38d',
      },
      maxWidth: {
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '770': '770px',
        '800': '800px',
        '900': '900px',
        '1000': '1000px',
        '1100': '1100px',
        '1200': '1200px',
      },
      boxShadow: {
        'light-shadwo': '0 4px 24px 0 rgba(0,0,0,0.08)',
      },
      fontSize: {
        '20': '1.25rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        'fade-in': 'fadeIn 0.3s ease forwards',
        'zoom-in': 'zoomIn 0.3s ease forwards',
      },
    },
  },
  plugins: [],
};
