/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFBF9',
          100: '#FAF8F5',
          200: '#F5F2EB',
          300: '#EFEAE0',
        },
        charcoal: {
          950: '#070B14',
          900: '#0F172A',
          850: '#141E33',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
        },
        electric: {
          violet: '#7C3AED',
          cobalt: '#2563EB',
          indigo: '#4F46E5',
          purple: '#9333EA',
          violetLight: '#A855F7',
          cobaltLight: '#60A5FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'card': '0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 0 1px 1px rgba(15, 23, 42, 0.04)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(124, 58, 237, 0.12), 0 0 1px 1px rgba(124, 58, 237, 0.1)',
        'glow-violet': '0 0 35px -5px rgba(124, 58, 237, 0.25)',
        'glow-blue': '0 0 35px -5px rgba(37, 99, 235, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
