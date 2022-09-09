import React from 'react'
import { NextPage } from 'next'
import useLoading from '@hooks/useLoading'
import dynamic from 'next/dynamic'

const LandingPage = dynamic(() => import('@components/template/LandingPage'))
const ProgressIndetermine = dynamic(
  () => import('@components/atoms/progress-indicators/ProgressIndetermine'),
)

const HomePage: NextPage = () => {
  const { loading } = useLoading()

  return <>{loading ? <ProgressIndetermine /> : <LandingPage />}</>
}

export default HomePage
