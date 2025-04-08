
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my_resume_project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my_resume_project"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 588, hash: '4297a442ac9da6c9a640280a129b0239c8e565874178cdd0db81def8eb4fac60', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1105, hash: '821444ca34fe7c23d792386835e6da7c83f9613266dc34f7d00d276c44190d94', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25434, hash: '07cb3a086e9f95f057660a9c065a4a3997c14d682c05605f620c782c8e1eb00a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
