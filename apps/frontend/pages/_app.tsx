import Head from 'next/head';
import '../styles/globals.css';
import { createContext } from 'react';
import { getStrapiMedia } from '../services/media';
import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import { theme } from '../lib/chakraUi';
import { ChakraProvider } from '@chakra-ui/react';
import data from '../data.preval';

export const GlobalContext = createContext({});

export default function MyApp({ Component, pageProps }: AppProps) {
  // const { global, navigationRes, footerData, footerLinksRes, alertData } = pageProps;
  const { global, navigationRes, footerData, footerLinksRes, alertData } = data;


  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <ChakraProvider theme={theme}>
          <Layout background={global.attributes.background} footerData={footerData} footerLinks={footerLinksRes} navigationRes={navigationRes} alertData={alertData}>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </GlobalContext.Provider>
    </>
  );
}

// MyApp.getInitialProps = async (ctx: AppContext) => {
//   const appProps = await App.getInitialProps(ctx);

//   // Navigation requires additional configuration to use GraphQL API, so we use REST API to fetch it
//   const navigationRes = await fetchAPI('/navigation/render/1', {
//     type: 'tree',
//   });

//   const footerLinksRes = await fetchAPI('/navigation/render/footer', {
//     type: 'tree'
//   })

//   const footerData: GetFooterQuery = (
//     await client.query({ query: GetFooterDocument })
//   ).data;

//   const globalData: GetGlobalQuery = (
//     await client.query({ query: GetGlobalDocument })
//   ).data;

//   const alertData: GetAlertQuery = (
//     await client.query({ query: GetAlertDocument })
//   ).data;

//   return {
//     ...appProps,
//     pageProps: { global: globalData.global.data, navigationRes, footerData, footerLinksRes, alertData },
//   };
// };
