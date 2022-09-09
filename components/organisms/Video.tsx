import React from 'react'
import { Container } from '@chakra-ui/react'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import {
  fadeInUp,
  photoAnimation,
  titleAnimation,
} from '@components/atoms/animations'
import { motion } from 'framer-motion'
import useScroll from '@hooks/useScroll'
import { AppHeadingMd } from '@components/molecules/typographies'

const MediaPlayer = dynamic(
  () => import('@components/molecules/media-player/MediaPlayer'),
  { ssr: false },
)

const url =
  'https://res.cloudinary.com/tv-masa-kini/video/upload/v1662469396/Mutiara_Ahmad_1_r95lb2.mp4'
const light =
  'https://res.cloudinary.com/tv-masa-kini/image/upload/v1662556413/photo1_i3pgbt.jpg'

const Video: React.FC = () => {
  const { locale } = useRouter()
  const { controls, element } = useScroll()

  return (
    <motion.div
      ref={element}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      id="video"
    >
      <Container
        maxW="container.lg"
        pt={{ base: '1rem', sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem' }}
        pl={0}
        pr={0}
      >
        <motion.div variants={titleAnimation}>
          <AppHeadingMd>{localize(locale, 'video')}</AppHeadingMd>
        </motion.div>
        <motion.div variants={photoAnimation}>
          <MediaPlayer url={url} light={light} />
        </motion.div>
      </Container>
    </motion.div>
  )
}

export default Video
