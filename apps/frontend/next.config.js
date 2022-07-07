// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


const moduleExports = {
    reactStrictMode: true,
    compiler: {
      emotion: true
    },
    images: {
      loader: "default",
      domains: ["strapi.elektronplus.pl"],
    },
    env: {
      NEXT_PUBLIC_STRAPI_API_URL: 'https://strapi.elektronplus.pl',
      NEXT_PUBLIC_SENTRY_DSN: 'https://93d1ca7d72e54f05af207dab352a95aa@o1206761.ingest.sentry.io/6533213',
      NEXT_PUBLIC_MEILISEARCH_INSTANCE_URL: 'https://zseis-zgora-meilisearch-konhi.koyeb.app/',
      NEXT_PUBLIC_MEILISEARCH_PUBLIC_KEY: 'mAXjXfvP8ebfefa1484813b824bdce8b4ad694a89fb236578955452f67e6a18a18ce9f7b'
    },
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });
  
      config.module.rules.push({
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
      })
  
      return config;
    },
  }

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
module.exports = withBundleAnalyzer(withSentryConfig(moduleExports, sentryWebpackPluginOptions));
