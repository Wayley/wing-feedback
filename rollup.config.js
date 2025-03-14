import NodeResolve from '@rollup/plugin-node-resolve';
import VuePlugin from '@vitejs/plugin-vue';
import PostCSS from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';
import dts from 'vite-plugin-dts';
import { name } from './package.json';
const $mame = '$WingFeedback';

/** @type {import('rollup').RollupOptions[]} */
const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: `dist/${name}.js`,
        format: 'umd',
        name: $mame,
      },
      {
        file: `dist/${name}.esm.js`,
        format: 'esm',
      },
      {
        file: `dist/${name}.es.js`,
        format: 'es',
      },
      {
        file: `dist/${name}.amd.js`,
        format: 'amd',
      },
      {
        file: `dist/${name}.cjs.js`,
        format: 'cjs',
      },
      {
        file: `dist/${name}.iife.js`,
        format: 'iife',
        name: $mame,
      },
    ],
    plugins: [
      dts({
        rollupTypes: true,
      }),
      // Resolve packages from `node_modules` e.g. `style-inject` module
      // used by `rollup-plugin-postcss` to inline CSS.
      NodeResolve(),
      typescript({
        tsconfig: false,
        experimentalDecorators: true,
        module: 'es2015',
      }),
      VuePlugin({
        // PostCSS-modules options for <style module> compilation
        cssModulesOptions: {
          generateScopedName: '[local]___[hash:base64:5]',
        },
      }),
      PostCSS(),
      terser(),
    ],
    external(id) {
      return /^(vue)$/.test(id);
    },
  },
];

export default config;
