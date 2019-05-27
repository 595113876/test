import { resolve } from 'path';

const DOMAIN = '';

export default {
  es5ImcompatibleVersions: true,
  hash: true,
  treeShaking: true,
  targets: {
    chrome: 27,
  },
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: true,
        antd: true,
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//,
            /config.(j|t)s$/,
          ],
        },
        dll: {
          exclude: [],
          include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch', 'antd/es'],
        },
        hardSource: /* isMac */ process.platform === 'darwin',
      },
    ],
  ],
  define: {
    DOMAIN: DOMAIN,
    ENV: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  },
  theme: './theme.config.js',
  alias: {
    themes: resolve(__dirname, './src/themes'),
  },
  urlLoaderExcludes: [/\.svg$/],
  ignoreMomentLocale: true,
  chainWebpack(config) {
    config.module
      .rule('svg')
      .test(/\.svg$/i)
      .use('svg-sprite-loader')
      .loader(require.resolve('svg-sprite-loader'));
  },
};
