/**
 * credit Vinicius De Antoni for the light/dark theme
 * https://medium.com/better-programming/how-to-enable-dark-mode-with-tailwindcss-and-pure-css-d32fe672062b
 */
module.exports = {
  purge: {
    mode: 'all',
    content: ['./public/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  },
  theme: {
    extend: {
      fontSize: {
        xxs: '0.65rem',
      },
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addBase, config }) {
      addBase({
        body: {
          color: config('theme.colors.black'),
          backgroundColor: config('theme.colors.white'),
        },
        '@screen dark': {
          body: {
            color: config('theme.colors.white'),
            backgroundColor: config('theme.colors.black'),
          },
        },
      });
    },
  ],
};
