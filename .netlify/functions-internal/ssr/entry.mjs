import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_hnMPh5_T.mjs';

const _page0  = () => import('./chunks/generic_3DLMcwuR.mjs');
const _page1  = () => import('./chunks/rss_0_WvnnDy.mjs');
const _page2  = () => import('./chunks/index_isB6rmke.mjs');
const _page3  = () => import('./chunks/_.._0mfoCz7s.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@4.2.1_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/rss.xml.js", _page1],["src/pages/index.astro", _page2],["src/pages/[...slug].astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
