import NodeResolve from '@rollup/plugin-node-resolve';
import PostCSS from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import VuePlugin from 'rollup-plugin-vue';

/** @type {import('rollup').RollupOptions[]} */
const config = [
  {
    input: 'src/components/FeedbackProvider.vue',
    output: {
      file: 'dist/wing-feedback.js',
      format: 'esm',
      // sourcemap: 'inline',
    },
    plugins: [
      // Resolve packages from `node_modules` e.g. `style-inject` module
      // used by `rollup-plugin-postcss` to inline CSS.
      NodeResolve(),
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
