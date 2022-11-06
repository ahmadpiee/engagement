import React from 'react'
import dynamic from 'next/dynamic'
import MapImage from '@public/assets/images/mapgoogle.png'

const LocationCard = dynamic(
  () => import('@components/molecules/cards/LocationCard'),
  { ssr: false },
)

const Location: React.FC = () => {
  return <LocationCard src={MapImage} />
}

export default Location
