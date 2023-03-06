import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/ts/index.ts',
  output: { file: 'dist/bundle.js' },
  plugins: [terser(), typescript(), /* Other plugins */],
};