import "@fontsource/lato";
import "@fontsource/noto-naskh-arabic";
//
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { isNotDevelopment } from "@utils/helpers/process-env";
import theme from "@components/global/Theme";

const Header = dynamic(() => import("@components/global/Header"), { ssr: false });
const Footer = dynamic(() => import("@components/global/Footer"), { ssr: false });
const HeaderAdmin = dynamic(() => import("@components/global/HeaderAdmin"), { ssr: false });
const ScrollToTop = dynamic(() => import("@components/atoms/scroll-to-top"), { ssr: false });
const Chat = dynamic(() => import("@components/global/Chat"), { ssr: false });

const DisableConsole = () => {
  if (isNotDevelopment) {
    return (console.log = function () {});
  }
};

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const url = `https://sofyan-muti.vercel.app${router.route}` || `https://localhost:3000${router.route}`;
  const patternAdmin = new RegExp(/\/admin\/.*/g);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <DefaultSeo
        titleTemplate="%s - Sofyan & Muti"
        openGraph={{
          type: "website",
          locale: "id_ID",
          url,
          description: "The personal website for Ahmad Sofyan, NextJs",
          site_name: "Sofyan & Muti | sofyan-muti.vercel.app",
          images: [],
        }}
        canonical={url}
      />
      {patternAdmin.test(router.pathname) === true ? <HeaderAdmin /> : <Header />}
      <div style={{ overflow: "hidden", minHeight: "100vh" }}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={DisableConsole()} />
        </AnimatePresence>
        <ScrollToTop />
      </div>
      <Chat />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
