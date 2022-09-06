import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isNotDevelopment } from "@utils/helpers/process-env";
import theme from "@components/global/Theme";

const Header = dynamic(() => import("@components/global/Header"));
const Footer = dynamic(() => import("@components/global/Footer"));
const HeaderAdmin = dynamic(() => import("@components/global/HeaderAdmin"));
const ScrollToTop = dynamic(() => import("@components/atoms/scroll-to-top"));

const DisableConsole = () => {
  if (isNotDevelopment) {
    return (console.log = function () {});
  }
};

function MyApp({ Component = React.Component, pageProps }) {
  const router = useRouter();
  const patternAdmin = new RegExp(/\/admin\/.*/g);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      {patternAdmin.test(router.pathname) === true ? <HeaderAdmin /> : <Header />}
      <div style={{ overflowX: "hidden", minHeight: "100vh" }}>
        <Component {...pageProps} key={DisableConsole()} />
      </div>
      <ScrollToTop />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
