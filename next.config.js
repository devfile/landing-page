/* eslint-disable @typescript-eslint/no-var-requires */
const typescriptIsTransformer = require('typescript-is/lib/transform-inline/transformer').default;
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')([
  '@patternfly/react-core',
  '@patternfly/react-styles',
]);

module.exports = withPlugins([withTM, withImages, withBundleAnalyzer, withPWA], {
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
  pwa: {
    /**
     * Uncomment the line below if the pwa issue is fixed.
     * The issue is because of nextjs 12 and next-pwa needs to be updated
     */
    // disable: process.env.NODE_ENV === 'development',
    disable: true, //
    register: true,
    dest: 'public',
  },
  publicRuntimeConfig: {
    analyticsWriteKey: process.env.ANALYTICS_WRITE_KEY || '',
    segmentUserId: 'landing-page',
  },
});
