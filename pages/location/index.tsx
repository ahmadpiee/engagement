import React from 'react'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import useLoading from '@hooks/useLoading'

const LocationPage = dynamic(() => import('@components/template/LocationPage'))
const ProgressIndetermine = dynamic(
  () => import('@components/atoms/progress-indicators/ProgressIndetermine'),
)

const Location: NextPage = () => {
  const { loading } = useLoading()

  return <>{loading ? <ProgressIndetermine /> : <LocationPage />}</>
}

export default Location
