import * as React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import { Button, ButtonProps } from '@chakra-ui/react'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import { colors } from '@components/global/Theme'
import style from '@styles/ScrollToTop.module.css'

const ScrollToTop: React.FC<ButtonProps> = props => {
  const { locale } = useRouter()
  const [showScroll, setShowScroll] = React.useState<Boolean>(false)

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Button
        rightIcon={<FaArrowCircleUp />}
        bg={colors.darkGradient}
        onClick={scrollTop}
        position="fixed"
        className={style.scrollToTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
        size="xs"
        {...props}
      >
        {localize(locale, 'goTop')}
      </Button>
    </>
  )
}

export default ScrollToTop
