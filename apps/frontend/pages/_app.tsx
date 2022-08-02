import Layout from 'components/Layout';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import {
  GetAlertDocument,
  GetAlertQuery,
  GetFooterDocument,
  GetFooterQuery,
  GetGlobalDocument,
  GetGlobalQuery,
  GetNavigationDocument,
  GetNavigationQuery,
  Maybe,
  NavigationItem,
} from 'generated/graphql';
import client from 'lib/apolloClient';
import { theme } from 'lib/chakraUi';
import { fetchAPI } from 'services/api';
import 'styles/globals.css';
import { DocumentNode } from '@apollo/client';
import mapObject from 'map-obj-async';
import { getStrapiMedia } from 'services/media';

interface GlobalContextInterface {
  menuLinks: GetNavigationQuery;
  footerLinks: GetNavigationQuery;
  footerContent: GetFooterQuery;
  global: GetGlobalQuery;
  alert: GetAlertQuery;
}

export const GlobalContext = createContext<GlobalContextInterface | null>(null);

export default function MyApp({ Component, pageProps }: AppProps) {
  const globalContext: GlobalContextInterface = pageProps.globalData;

  const attributes = globalContext.global.global.data.attributes

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
      <GlobalContext.Provider value={globalContext}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
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
      query: GetNavigationDocument,
      variables: {
        navigationIdOrSlug: 'menu',
      },
    },
    footerLinks: {
      query: GetNavigationDocument,
      variables: {
        navigationIdOrSlug: 'footer',
      },
    },
    footerContent: {
      query: GetFooterDocument,
    },
    global: {
      query: GetGlobalDocument,
    },
    alert: {
      query: GetAlertDocument,
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
