import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/root-config.js',
  output: {
    file: 'dist/root-config.js',
    directory: 'dist',
    format: 'esm'
  },
  name: 'MyModule',
  plugins: [
    resolve(),
    commonjs(),
  ]
}
