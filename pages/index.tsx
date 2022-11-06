import React, { useState } from 'react'
import { NextPage } from 'next'
import useLoading from '@hooks/useLoading'
import dynamic from 'next/dynamic'
import Layout from '@components/global/Layout'
import { useRouter } from 'next/router'
import { localize } from '@utils/lib/formatter'

const LandingPage = dynamic(() => import('@components/template/LandingPage'), {
  ssr: false,
})
const ProgressIndetermine = dynamic(
  () => import('@components/atoms/progress-indicators/ProgressIndetermine'),
  { ssr: false },
)

const HomePage: NextPage = () => {
  const { loading } = useLoading()
  const { locale } = useRouter()

  return (
    <Layout title={localize(locale, 'home')}>
      {loading ? <ProgressIndetermine /> : <LandingPage />}
    </Layout>
  )
}

export default HomePage
