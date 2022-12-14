const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

const generateSpacing = (length, jump) => {
  return Array.from({ length }).reduce(
    (acc, _, i) => ({ ...acc, [i + 1]: (i + 1) * jump + 'px' }),
    {}
  );
};

const spacing = generateSpacing(20, 4);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,design-system}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      spacing,
      padding: spacing,
      height: spacing,
      margin: spacing,
      colors: {
        gray: {
          100: '#ABA7A7',
          200: '#D8D8D8',
          300: '#E9E9E9',
        },
        primary: {
          100: '#FF7878',
        },
        white: {
          100: '#ffffff',
        },
        black: {
          100: '#000000',
          900: '#00000039',
        },
      },
      screens: {},
    },
  },
  plugins: [],
};
