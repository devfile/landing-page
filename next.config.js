const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withTM = require('next-transpile-modules')([
  '@patternfly/react-core',
  '@patternfly/react-styles'
]);

module.exports = withPlugins([withTM, withImages, withBundleAnalyzer, withPWA], {
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    dest: 'public'
  },
  env: {
    docsPath: process.env.NODE_ENV === 'production' ? '/docs' : 'https://docs.devfile.io'
  }
});
