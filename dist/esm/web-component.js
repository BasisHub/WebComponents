import { p as promiseResolve, b as bootstrapLazy } from './index-8bf61c1b.js';

/*
 Stencil Client Patch Browser v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["avatar-initial_2",[[1,"avatar-initial",{"width":[2],"height":[2],"name":[1]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1],"image":[1]}]]]], options);
});
