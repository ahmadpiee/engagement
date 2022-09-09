import '@fontsource/lato'
import '@fontsource/noto-naskh-arabic'
import '@fontsource/sora'
//
import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { isNotDevelopment } from '@utils/helpers/process-env'
import theme from '@components/global/Theme'

const Header = dynamic(() => import('@components/global/header/index'), {
  ssr: false,
})
const Footer = dynamic(() => import('@components/global/Footer'), {
  ssr: false,
})
const HeaderAdmin = dynamic(() => import('@components/global/HeaderAdmin'), {
  ssr: false,
})
const ScrollToTop = dynamic(() => import('@components/atoms/scroll-to-top'), {
  ssr: false,
})
const Chat = dynamic(() => import('@components/global/Chat'), { ssr: false })

const DisableConsole = () => {
  if (isNotDevelopment) {
    return (console.log = function () {})
  }
}

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const url = `https://muti.asof.dev${router.route}`
  const patternAdmin = new RegExp(/\/admin\/.*/g)

  const RenderSeo = () => (
    <DefaultSeo
      title="Sofyan & Muti"
      description="My Personal Website for me and her"
      canonical={url}
      openGraph={{
        type: 'website',
        locale: 'id_ID',
        url: url,
        site_name: 'SiteName',
        description: 'Open Graph Description',
        title: 'sofyan dan muti',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 512,
            height: 512,
            alt: 'muti.asoff.dev logo',
            type: 'image/png',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 512,
            height: 512,
            alt: 'muti.asoff.dev logo',
            type: 'image/png',
          },
        ],
      }}
      twitter={{
        handle: '@ahmadpiee',
        site: 'muti.asof.dev',
        cardType: 'My Personal Website',
      }}
    />
  )

  return (
    <>
      <ChakraProvider theme={theme}>
        <RenderSeo />
        {patternAdmin.test(router.pathname) === true ? (
          <HeaderAdmin />
        ) : (
          <Header />
        )}
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <div style={{ overflow: 'hidden', minHeight: '100vh' }}>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route && DisableConsole()} />
          </AnimatePresence>
          <ScrollToTop />
        </div>
        <Chat />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default MyApp
