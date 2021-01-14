import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import { reactOutputTarget } from '@stencil/react-output-target';
import { svelteOutputTarget } from '@stencil/svelte-output-target';

export const config: Config = {
  namespace: 'vitamin-wc-button',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "@decathlon/vitamin-wc-button",
      proxiesFile: '../../../react/src/button/dist/index.ts',
    }),
    svelteOutputTarget({
      componentCorePackage: '@decathlon/vitamin-wc-button',
      proxiesFile: '../../../svelte/src/button/dist/index.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [
        postcssImport(),
        autoprefixer()
      ]
    })
  ]
};
