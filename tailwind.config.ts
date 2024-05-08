import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
          'base-100': '#f8fafc',
        },
      },
      'cupcake',
      {
        dracula: {
          primary: '#0A0D2C',
          'primary-content': 'white',
          'base-100': '#0B0C1E',
        },
      },
      {
        black: {
          primary: 'black',
          'primary-content': 'white',
          'base-100': '#0c0a09',
        },
      },
    ],
  },
}
export default config
