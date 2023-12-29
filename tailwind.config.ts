import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary-blue': "#356BB3",
        'secondary-yellow': "#FBB601",
        'tertiary-lightYellow': "#FFF3CB",
        'lightBlue': '#E8F2F8',
        'google-green':'#34A853',
        'google-red':'#EA4335',
        'google-yellow':'#FBBC05',
        'google-blue':'#4285F4',
        'whiteTone': '#F9F9F9',
        'grayToneStroke': '#B8BFCC',
        'grayTone1': '#3C404B',
        'grayTone2': '#6C768A',
        'grayTone3': '#A0ABC0',
        'textDarkTone': '#23252F',

        'background-white': '#F6F6F8',
        'logo-yellow':'#F69319',
        'white-layout': '#E5EAF0CC',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily:{
        'poppins' : 'POPPINS',
        'lovelace': 'LOVELACE',
        'catamaran': 'CATAMARAN',
        'montserrat': 'MONTSERRAT',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) , blink .7s infinite"
      },
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      '3xl': {'max': '1600px'},
      // => @media (max-width: 1600px) { ... }

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xs': {'max': '475px'},
      // => @media (max-width: 475px) { ... }
    },
  },
  plugins: [],
}
export default config
