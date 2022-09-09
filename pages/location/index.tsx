import React from 'react'
import { NextPage } from 'next'
import { AppHeadingMd } from '@components/molecules/typographies'
import Layout from '@components/global/Layout'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'

const Location: NextPage = () => {
  const { locale } = useRouter()
  return (
    <Layout id="location" title={`${localize(locale, 'location')}`}>
      <AppHeadingMd>Location Page</AppHeadingMd>
    </Layout>
  )
}

export default Location
