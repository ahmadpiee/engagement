import React from 'react'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import useLoading from '@hooks/useLoading'
import { useRouter } from 'next/router'
import { localize } from '@utils/lib/formatter'
import Layout from '@components/global/Layout'

const LocationPage = dynamic(() => import('@components/template/LocationPage'))
const ProgressIndetermine = dynamic(
  () => import('@components/atoms/progress-indicators/ProgressIndetermine'),
)

const Location: NextPage = () => {
  const { loading } = useLoading()
  const { locale } = useRouter()

  return (
    <Layout id="location" title={`${localize(locale, 'location')}`}>
      {loading ? <ProgressIndetermine /> : <LocationPage />}
    </Layout>
  )
}

export default Location
