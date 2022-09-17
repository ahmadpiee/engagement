import React from 'react'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import Layout from '@components/global/Layout'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import MapImage from '@public/assets/images/mapgoogle.png'

const LocationCard = dynamic(
  () => import('@components/molecules/cards/LocationCard'),
  { ssr: false },
)

const Location: NextPage = () => {
  const { locale } = useRouter()
  return (
    <Layout
      id="location"
      title={`${localize(locale, 'location')}`}
      pt={{ base: '10' }}
    >
      <LocationCard src={MapImage} />
    </Layout>
  )
}

export default Location
