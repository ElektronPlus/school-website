import App, { AppContext } from "next/app";
import Head from "next/head";
import '../styles/globals.css'
import { createContext } from "react";
import { fetchAPI } from "../services/api";
import { getStrapiMedia } from "../services/media";
import Layout from "../components/layout"
import type { AppProps } from 'next/app'


export const GlobalContext = createContext({});

export default function MyApp({ Component, pageProps }: AppProps) {
  const { global, navigationRes } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)} />
      </Head>
        <GlobalContext.Provider value={global.attributes}>
        <Layout navigationRes={navigationRes}>
          <Component {...pageProps} />
        </Layout>
        </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);

  const navigationRes = await fetchAPI("/navigation/render/1", { type: "tree" })

  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      logo: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  return { ...appProps, pageProps: { global: globalRes.data, navigationRes: navigationRes } };
};
