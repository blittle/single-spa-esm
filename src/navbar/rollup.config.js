import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/navbar/navbar.js',
  output: {
    file: 'dist/navbar.js',
    format: 'system'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    commonjs(),
  ],
  external: ['react', 'react-dom']
};
