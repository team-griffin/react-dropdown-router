const path = require('path');
const babel = require('rollup-plugin-babel');
const localResolve = require('rollup-plugin-node-resolve');

const pkg = require(path.resolve('./package.json'));
const external = Object.keys(pkg.dependencies || {})
  .concat(Object.keys(pkg.peerDependencies || {}));

export default {
  input: 'src/index.ts',
  output: [
    {
      file: `dist/es/react-dropdown-router.js`,
      format: 'es',
    },
    {
      file: `dist/cjs/react-dropdown-router.js`,
      format: 'cjs',
    },
  ],
  plugins: [
    localResolve({
      extensions: [ '.js', '.ts', '.tsx' ],
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: [ '.js', '.ts', '.tsx' ],
    }),
  ],
  external,
  onwarn: (warning, warn) => {
    if (warning.code === 'UNRESOLVED_IMPORT') {
      throw new Error(warning.message);
    }
    
    warn(warning);
  },
};
