import React from 'react'

const useLoading = () => {
  const [loading, setLoading] = React.useState<Boolean>(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return { loading, setLoading }
}

export default useLoading
