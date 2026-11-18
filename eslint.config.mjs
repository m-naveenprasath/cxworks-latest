import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const config = [
  ...nextVitals,
  ...nextTs,
  { ignores: ['.next/**', 'node_modules/**', '_legacy/**', 'next-env.d.ts'] },
  {
    rules: {
      // Marketing images are small static SVG/PNGs served from /public; <img> keeps their exact inline sizing.
      '@next/next/no-img-element': 'off',
    },
  },
  {
    // Products pages render from the `v` bag built by lib/products/logic.ts, which also carries the
    // DOM refs the logic attaches to elements. The refs are only read by the logic in effects/handlers.
    files: ['components/products/**/*.tsx'],
    rules: { 'react-hooks/refs': 'off' },
  },
];

export default config;
