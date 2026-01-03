/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        }
                },
                keyframes: {
                        'accordion-down': {
                                from: { height: '0' },
                                to: { height: 'var(--radix-accordion-content-height)' }
                        },
                        'accordion-up': {
                                from: { height: 'var(--radix-accordion-content-height)' },
                                to: { height: '0' }
                        },
                        'float': {
                                '0%, 100%': { transform: 'translateY(0)' },
                                '50%': { transform: 'translateY(-10px)' }
                        },
                        'glow-pulse': {
                                '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' },
                                '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 20, 147, 0.3)' }
                        },
                        'gradient-shift': {
                                '0%': { backgroundPosition: '0% 50%' },
                                '50%': { backgroundPosition: '100% 50%' },
                                '100%': { backgroundPosition: '0% 50%' }
                        },
                        'text-shimmer': {
                                '0%': { backgroundPosition: '-200% center' },
                                '100%': { backgroundPosition: '200% center' }
                        },
                        'slide-up': {
                                '0%': { transform: 'translateY(20px)', opacity: '0' },
                                '100%': { transform: 'translateY(0)', opacity: '1' }
                        },
                        'slide-in-left': {
                                '0%': { transform: 'translateX(-20px)', opacity: '0' },
                                '100%': { transform: 'translateX(0)', opacity: '1' }
                        },
                        'scale-in': {
                                '0%': { transform: 'scale(0.9)', opacity: '0' },
                                '100%': { transform: 'scale(1)', opacity: '1' }
                        },
                        'blur-in': {
                                '0%': { filter: 'blur(10px)', opacity: '0' },
                                '100%': { filter: 'blur(0)', opacity: '1' }
                        },
                        'rotate-slow': {
                                '0%': { transform: 'rotate(0deg)' },
                                '100%': { transform: 'rotate(360deg)' }
                        },
                        'bounce-subtle': {
                                '0%, 100%': { transform: 'translateY(0)' },
                                '50%': { transform: 'translateY(-5px)' }
                        },
                        'wiggle': {
                                '0%, 100%': { transform: 'rotate(-3deg)' },
                                '50%': { transform: 'rotate(3deg)' }
                        },
                        'tape-sway': {
                                '0%, 100%': { transform: 'rotate(-2deg) translateY(0)' },
                                '50%': { transform: 'rotate(2deg) translateY(-3px)' }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'float': 'float 3s ease-in-out infinite',
                        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                        'gradient-shift': 'gradient-shift 3s ease infinite',
                        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
                        'slide-up': 'slide-up 0.6s ease-out forwards',
                        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
                        'scale-in': 'scale-in 0.5s ease-out forwards',
                        'blur-in': 'blur-in 0.6s ease-out forwards',
                        'rotate-slow': 'rotate-slow 20s linear infinite',
                        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
                        'wiggle': 'wiggle 1s ease-in-out infinite',
                        'tape-sway': 'tape-sway 4s ease-in-out infinite'
                },
                backgroundImage: {
                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                        'aurora': 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,20,147,0.1) 50%, rgba(255,215,0,0.1) 100%)',
                        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(255,215,0,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(255,20,147,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(255,215,0,0.1) 0px, transparent 50%)'
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};