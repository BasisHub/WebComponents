import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-component',
  globalStyle: 'src/global/global.css',
  invisiblePrehydration: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      empty: false,
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
};
