import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      overlay: '#00000069',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#4338ca',
          'primary-content': 'white',
          // secondary: '',
          accent: '#261D86',
          'base-100': '#f8fafc',
          'base-200': '#E5E4E0',
          'base-300': '#939391',
          'base-content': '#4338ca',
          'neutral-content': 'black',
        },
      },
      {
        cupcake: {
          primary: '#680363',
          'primary-content': 'FDF6A5',
          // secondary: 'f6d860',
          accent: '3B0138',
          'base-100': '#FAF4B9',
          'base-200': '#F6E9B4',
          'base-300': '#D7BA43',
          'base-content': '#680363',
          'neutral-content': 'black',
        },
      },
      {
        dracula: {
          primary: '#0A0D2C',
          'primary-content': 'white',
          accent: '0E144C',
          'base-100': '#0B0C1E',
          'base-200': '#1B1C34',
          'base-300': '#4F516C',
          'base-content': 'white',
          'neutral-content': 'white',
        },
      },
      {
        black: {
          primary: 'black',
          'primary-content': 'white',
          accent: '212123',
          'base-100': '#0c0a09',
          'base-200': '#2B2725',
          'base-300': '#7F7B78',
          'base-content': 'white',
          'neutral-content': 'white',
        },
      },
    ],
  },
}
export default config
