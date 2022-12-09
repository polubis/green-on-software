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
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      spacing,
      padding: spacing,
      height: spacing,
    },
  },
  plugins: [],
};
