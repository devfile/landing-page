const typescriptIsTransformer = require('typescript-is/lib/transform-inline/transformer').default;
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')([
  '@patternfly/react-core',
  '@patternfly/react-styles',
]);

module.exports = withPlugins([withTM, withImages], {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
      options: {
        getCustomTransformers: (program) => ({
          before: [typescriptIsTransformer(program)],
        }),
      },
    });
    return config;
  },
  basePath: process.env.LANDING_PAGE_ROOT ? process.env.LANDING_PAGE_ROOT : '',
  publicRuntimeConfig: {
    analyticsWriteKey: process.env.ANALYTICS_WRITE_KEY || '',
    segmentClientId: 'landing-page',
  },
  swcMinify: true,
});
