
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://OMKAR9395.github.io/Todo-List-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Todo-List-Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 537, hash: '73c2364ee1ef3754a120a3bfdabe02d2a670791b8bfd8964fb310d0f7f0a421b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: '5c54f76a825249c6ee2667e5aa4cc879c27cd35ea4d017d44f754bd80bafabce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2648, hash: '261ad16c8c401e164d8da3e42bcbe4fa43bb0c36410d2f838c62f0d3043045a1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
