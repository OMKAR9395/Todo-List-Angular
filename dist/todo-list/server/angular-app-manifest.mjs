
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Todo-List-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Todo-List-Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 510, hash: '5d8d361caa94a1c6559a59bcf4fa8ef09219b548dfd060d376f115e7edb58eea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '41dbda90632d26447ae23d8fb28f210413175a94d93d0c11384ac6573059cb28', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2621, hash: 'e1af8ab0a358a967a0d9e2779606d887a6eb35f70fde532efcaa6994c48c8eda', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
