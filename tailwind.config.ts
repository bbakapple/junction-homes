import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      pretendard: ['Pretendard', 'sans-serif'],
    },
    fontSize: {
      'title-bold-20': [
        '20px',
        {
          fontWeight: '700',
        },
      ],
      'body-bold-18': [
        '18px',
        {
          fontWeight: '700',
        },
      ],
      'body-bold-14': [
        '14px',
        {
          fontWeight: '700',
        },
      ],
      'body-semibold-14': [
        '14px',
        {
          fontWeight: '600',
        },
      ],
      'body-medium-14': [
        '14px',
        {
          fontWeight: '500',
        },
      ],
      'body-regular-14': [
        '14px',
        {
          fontWeight: '400',
        },
      ],
      'body-small-bold-12': [
        '12px',
        {
          fontWeight: '700',
        },
      ],
      'body-small-medium-12': [
        '12px',
        {
          fontWeight: '500',
        },
      ],
      'body-small-regular-12': [
        '12px',
        {
          fontWeight: '400',
        },
      ],
      'caption-bold-9': [
        '9px',
        {
          fontWeight: '700',
        },
      ],
      'caption-regular-10': [
        '10px',
        {
          fontWeight: '400',
        },
      ],
    },
    extend: {
      boxShadow: {
        tab: '0px 8px 12px rgba(135, 145, 233, 0.3)',
        card: '0px 20px 50px rgba(220, 224, 249, 0.5)',
        flow: '0px 30px 77px rgba(220, 224, 249, 0.5)',
        detail: '0px 8px 12px rgba(188, 188, 188, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
