import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'components/Layout';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import { getStrapiMedia } from 'services/media';
import {
  GetAlertDocument,
  GetAlertQuery,
  GetFooterDocument,
  GetFooterQuery,
  GetGlobalDocument,
  GetGlobalQuery,
  Maybe,
  NavigationItem
} from 'generated/graphql';
import client from 'lib/apolloClient';
import { theme } from 'lib/chakraUi';
import { fetchAPI } from 'services/api';
import 'styles/globals.css';

export const GlobalContext = createContext({});

export default function MyApp({ Component, pageProps }: AppProps) {
  const {
    globalData,
    navigationRes,
    footerData,
    footerLinksRes,
    alertData,
  }: {
    globalData: GetGlobalQuery;
    navigationRes: Array<Maybe<NavigationItem>>;
    footerData: GetFooterQuery;
    footerLinksRes: Array<Maybe<NavigationItem>>;
    alertData: GetAlertQuery;
  } = pageProps;

  const { attributes } = globalData.global.data;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(attributes.favicon)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo
        openGraph={{
          images: [
            {
              url: getStrapiMedia(attributes.shareImage),
              width: attributes.shareImage.data.attributes.width,
              height: attributes.shareImage.data.attributes.height,
              alt: attributes.shareImage.data.attributes.alternativeText,
            },
          ],
        }}
        description={attributes.siteDescription}
        titleTemplate={`%s | ${attributes.siteName}`}
        defaultTitle={attributes.siteName}
      />
      <ChakraProvider theme={theme}>
        <Layout
          background={attributes.background}
          footerData={footerData}
          footerLinks={footerLinksRes}
          navigationRes={navigationRes}
          alertData={alertData}
          header={attributes.logo}
        >
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);

  // Navigation requires additional configuration to use GraphQL API, so we use REST API to fetch it
  const navigationRes = await fetchAPI('/navigation/render/main-navigation', {
    type: 'tree',
  });

  const footerLinksRes = await fetchAPI('/navigation/render/footerColumns', {
    type: 'tree',
  });

  const footerData: GetFooterQuery = (
    await client.query({ query: GetFooterDocument })
  ).data;

  const globalData: GetGlobalQuery = (
    await client.query({ query: GetGlobalDocument })
  ).data;

  const alertData: GetAlertQuery = (
    await client.query({ query: GetAlertDocument })
  ).data;

  return {
    ...appProps,
    pageProps: {
      globalData,
      navigationRes,
      footerData,
      footerLinksRes,
      alertData,
    },
  };
};
