// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const images =
  process.env.NEXT_PUBLIC_STRAPI_API_URL ?? 'strapi.elektronplus.pl';

const moduleExports = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  // This template doesn't support internationalization, but we use it to dynamcially set html lang (https://newdevzone.com/posts/how-to-set-html-lang-attribute-dynamically-on-nextjs-document)
  i18n: {
    locales: [process.env.NEXT_PUBLIC_LANGUAGE],
    defaultLocale: process.env.NEXT_PUBLIC_LANGUAGE,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 604800,
    loader: 'default',
    domains: [images],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  env: {
    NEXT_PUBLIC_MEILISEARCH_INSTANCE_URL: process.env.MEILI_HOST,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack(config, { dev, isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config;
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withBundleAnalyzer(
  withSentryConfig(moduleExports, sentryWebpackPluginOptions)
);
