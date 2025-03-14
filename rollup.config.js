import NodeResolve from '@rollup/plugin-node-resolve';
import VuePlugin from '@vitejs/plugin-vue';
import PostCSS from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';
import dts from 'vite-plugin-dts';

/** @type {import('rollup').RollupOptions[]} */
const config = [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/wing-feedback.js',
      format: 'esm',
    },
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
