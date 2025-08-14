import type { Config } from 'tailwindcss';
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './public/svg/**/*.svg'
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.25rem',
                sm: '1.5rem',
                lg: '2rem',
                xl: '2.5rem',
                '2xl': '3rem'
            }
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-source-sans)'],
                serif: ['var(--font-playfair)']
            },
            colors: {
                brand: {
                    primary: '#1A2E35',
                    primaryTint: '#253E48',
                    primaryShade: '#132227',
                    gold: '#b89550',
                    'gold-hover': '#a1803c',
                    goldSoft: '#d4b662',
                    goldAlt: '#c3a258'
                },
                surface: {
                    50: '#f8f8f7',
                    100: '#f1f0ee',
                    800: '#1c1c1a',
                    900: '#10100f',
                    950: '#0b0b0a'
                }
            },
            backgroundImage: {
                'radial-gold-soft': 'radial-gradient(circle at 22% 25%, rgba(212,182,98,0.12), transparent 65%)',
                'radial-gold-inverse': 'radial-gradient(circle at 78% 28%, rgba(212,182,98,0.10), transparent 60%)',
                'gradient-fade-b':
                    'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(10,10,10,0.85) 95%)'
            },
            boxShadow: {
                'elevation-sm': '0 6px 18px -8px rgba(0,0,0,0.45)',
                'elevation-md': '0 10px 40px -18px rgba(0,0,0,0.60)',
                'elevation-gold': '0 14px 46px -14px rgba(212,182,98,0.25)'
            },
            ringColor: {
                gold: '#b89550'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(.94)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                },
                shimmer: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '200% 50%' }
                }
            },
            animation: {
                fadeIn: 'fadeIn .6s ease forwards',
                scaleIn: 'scaleIn .5s cubic-bezier(.16,.84,.44,1) forwards',
                shimmer: 'shimmer 2.2s linear infinite'
            },
            transitionTimingFunction: {
                'luxury': 'cubic-bezier(.16,.84,.44,1)'
            },
            opacity: {
                15: '0.15'
            }
        }
    },
    safelist: [
        // dynamic ring / bg utilities used via runtime conditions
        'ring-brand-gold',
        'bg-brand-gold',
        'hover:ring-brand-gold/60'
    ],
    plugins: [
        aspectRatio,
        function ({ addVariant }) {
            addVariant('supports-hover', '@media (hover: hover)');
            addVariant('hocus', ['&:hover', '&:focus-visible']);
        }
    ]
};

export default config;