import React from 'react'
import Head from 'next/head'
import { pageAnimation } from '@components/atoms/animations/index'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Box, Container } from '@chakra-ui/react'

interface LayoutProps {
  children?: any
  className?: string
  title?: string
  description?: string
  keywords?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  title,
  description,
  keywords,
}) => {
  const router = useRouter()

  return (
    <Box className={className}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <motion.div
        key={router.route}
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Container maxW="container.lg" pt={{ base: 14 }}>
          {children}
        </Container>
      </motion.div>
    </Box>
  )
}

export default Layout

Layout.defaultProps = {
  title: `asof's website`,
  description: 'Ahmadpiee NextJs App Boiler Plate',
  keywords: 'ahmadpiee',
}
