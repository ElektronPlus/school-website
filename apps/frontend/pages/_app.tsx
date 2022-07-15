import App, { AppContext } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { createContext } from 'react';
import { getStrapiMedia } from '../services/media';
import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import { GetAlertDocument, GetAlertQuery, GetFooterDocument, GetFooterQuery, GetGlobalDocument, GetGlobalQuery } from '../generated/graphql';
import client from '../lib/apolloClient';
import { fetchAPI } from '../services/api';
import { theme } from '../lib/chakraUi';
import { ChakraProvider } from '@chakra-ui/react';

export const GlobalContext = createContext({});

export default function MyApp({ Component, pageProps }: AppProps) {
  const { globalData, navigationRes, footerData, footerLinksRes, alertData }: {globalData: GetGlobalQuery, navigationRes: any, footerData: GetFooterQuery, footerLinksRes: any, alertData: GetAlertQuery} = pageProps;

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(globalData.global.data.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={globalData.global.data.attributes}>
        <ChakraProvider theme={theme}>
          <Layout background={globalData.global.data.attributes.background} footerData={footerData} footerLinks={footerLinksRes} navigationRes={navigationRes} alertData={alertData} headerImgSrc={getStrapiMedia(globalData.global.data.attributes.logo)} headerAlternativeText={globalData.global.data.attributes.logo.data.attributes.alternativeText}>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </GlobalContext.Provider>
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
    type: 'tree'
  })

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
    pageProps: { globalData, navigationRes, footerData, footerLinksRes, alertData },
  };
};
