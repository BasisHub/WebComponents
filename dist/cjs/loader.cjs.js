'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-01df1aa7.js');

/*
 Stencil Client Patch Esm v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["avatar-initial_2.cjs",[[1,"avatar-initial",{"width":[2],"height":[2],"name":[1]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1],"image":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
