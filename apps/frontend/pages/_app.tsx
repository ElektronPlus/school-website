import { DocumentNode } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import Layout from 'components/Layout';
import {
  FetchAlertQuery,
  FetchAlertDocument,
  FetchFooterDocument,
  FetchFooterQuery,
  FetchNavigationDocument,
  FetchNavigationQuery,
  GetGlobalDocument,
  GetGlobalQuery,
  GetTranslationsDocument,
  GetTranslationsQuery,
} from 'generated/graphql';
import client from 'lib/apolloClient';
import mapObject from 'map-obj-async';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import { getStrapiMedia } from 'services/media';
import 'styles/globals.css';
import { theme } from 'lib/emotion';

interface GlobalContextInterface {
  menuLinks: FetchNavigationQuery;
  footerLinks: FetchNavigationQuery;
  footerContent: FetchFooterQuery;
  global: GetGlobalQuery;
  alert: FetchAlertQuery;
  translations: GetTranslationsQuery;
}

export const GlobalContext = createContext<GlobalContextInterface | null>(null);

export default function MyApp({ Component, pageProps }: AppProps) {
  const globalContext: GlobalContextInterface = pageProps.globalData;

  const attributes = globalContext.global.global.data.attributes;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(attributes.favicon)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <DefaultSeo
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
      /> */}
      <GlobalContext.Provider value={globalContext}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);

  interface Query {
    query: DocumentNode;
    variables?: object;
  }

  const queries: Record<string, Query> = {
    menuLinks: {
      query: FetchNavigationDocument,
      variables: {
        navigationIdOrSlug: 'menu',
      },
    },
    footerLinks: {
      query: FetchNavigationDocument,
      variables: {
        navigationIdOrSlug: 'footer',
      },
    },
    footerContent: {
      query: FetchFooterDocument,
    },
    global: {
      query: GetGlobalDocument,
    },
    alert: {
      query: FetchAlertDocument,
    },
    translations: {
      query: GetTranslationsDocument,
    },
  };

  const globalData = await mapObject(queries, async (key, parameters) => {
    const { query, variables } = parameters;
    const result = (await client.query({ query, variables })).data;

    return [key, result];
  });

  return {
    ...appProps,
    pageProps: {
      globalData,
    },
  };
};
