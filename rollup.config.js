export default {
  input: 'src/root-config.js',
  output: {
    file: 'dist/root-config.js',
    directory: 'dist',
    format: 'system'
  },
  external: ['single-spa']
}
