import { p as promiseResolve, b as bootstrapLazy } from './index-8bf61c1b.js';

/*
 Stencil Client Patch Esm v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["avatar-initial_2",[[1,"avatar-initial",{"width":[2],"height":[2],"name":[1]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1],"image":[1]}]]]], options);
  });
};

export { defineCustomElements };
