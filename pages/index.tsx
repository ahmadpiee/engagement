import React from 'react'
import Layout from '@components/global/Layout'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import LandingPage from '@components/template/LandingPage'

const HomePage: NextPage = () => {
  const { locale } = useRouter()

  return (
    <Layout title={`${localize(locale, 'home')} | asof's`}>
      <LandingPage />
    </Layout>
  )
}

export default HomePage
