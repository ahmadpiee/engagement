import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isNotDevelopment } from "@utils/helpers/process-env";
import theme from "@components/global/Theme";
import { AppProps } from "next/app";

const Header = dynamic(() => import("@components/global/Header"));
const Footer = dynamic(() => import("@components/global/Footer"));
const HeaderAdmin = dynamic(() => import("@components/global/HeaderAdmin"));
const ScrollToTop = dynamic(() => import("@components/atoms/scroll-to-top"));

const DisableConsole = () => {
  if (isNotDevelopment) {
    return (console.log = function () {});
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const patternAdmin = new RegExp(/\/admin\/.*/g);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      {patternAdmin.test(router.pathname) === true ? <HeaderAdmin /> : <Header />}
      <Component {...pageProps} key={DisableConsole()} />
      <ScrollToTop />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
