export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'Orbitron', 'sans-serif'],
      },
      colors: {
        primary: '#7F5AF0',
        secondary: '#2CB67D',
        dark: '#16161A',
        light: '#FFFFFE',
        muted: '#94A1B2',
      },
    },
  },
  plugins: [],
}
