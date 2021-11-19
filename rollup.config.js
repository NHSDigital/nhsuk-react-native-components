import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pluginJson from '@rollup/plugin-json';
import copy from "rollup-plugin-copy-assets";
import typescript from 'rollup-plugin-typescript2';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  pluginJson(),
  copy({ assets: [ "src/assets" ] }),
  typescript({ typescript: require('typescript') }),
];

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: packageJson.main, format: 'cjs', sourcemap: true },
      { file: packageJson.module, format: 'esm', sourcemap: true },
    ],
    plugins,
  },
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/deprecated.js', format: 'cjs', sourcemap: true },
      { file: 'dist/deprecated.es.js', format: 'esm', sourcemap: true },
    ],
    plugins,
  },
];
