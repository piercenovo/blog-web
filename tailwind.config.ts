import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#242424',
      grey: '#F3F3F3',
      'dark-grey': '#6B6B6B',
      red: '#FF4E4E',
      transparent: 'transparent',
      twitter: '#1DA1F2',
      purple: '#084e84'
    },
    fontSize: {
      sm: '12px',
      base: '14px',
      xl: '16px',
      '2xl': '20px',
      '3xl': '28px',
      '4xl': '38px',
      '5xl': '50px'
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        gelasio: ['var(--font-gelasio)']
      }
    }
  },
  plugins: []
}
export default config
