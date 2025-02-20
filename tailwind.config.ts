import type {Config} from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--bg-color)',
        text: 'var(--text-color)',
      }
    }
  }
}

export default config;
