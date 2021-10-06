module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h2: {
              background: '#4F46E5',
              borderRadius: '8px',
              padding: '16px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '800',
              fontSize: '36px',
              lineHeight: '40px',
              color: '#FFFFFF',
            },

            h3: {
              background: '#FFFFFF',
              borderLeft: '8px solid #4F46E5',
              padding: '16px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '800',
              fontSize: '28px',
              lineHeight: '32px',
              color: '#374151',
            },

            p: {
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              color: '#374151',
            },

            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },

            iframe: {
              width: '100%',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
