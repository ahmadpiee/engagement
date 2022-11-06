// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'react-medium-image-zoom/dist/styles.css'
//
import React from 'react'
import Image from 'next/image'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import {
  fadeInUp,
  photoAnimation,
  titleAnimation,
} from '@components/atoms/animations'
import { motion } from 'framer-motion'
import useScroll from '@hooks/useScroll'
import dynamic from 'next/dynamic'
import useLoading from '@hooks/useLoading'
import { AppHeadingMd } from '@components/molecules/typographies'
import { SectionContainer } from '@components/molecules/containers'
import Zoom from 'react-medium-image-zoom'

const SkeletonCollage = dynamic(
  () => import('@components/molecules/skeleton/landing-page/SkeletonCollage'),
)

const Gallery: React.FC = () => {
  const { locale } = useRouter()
  const { controls, element } = useScroll()
  const { loading } = useLoading()

  return (
    <>
      {loading ? (
        <SkeletonCollage />
      ) : (
        <SectionContainer id="gallery">
          <motion.div
            variants={fadeInUp}
            ref={element}
            animate={controls}
            initial="hidden"
          >
            <motion.div variants={titleAnimation}>
              <AppHeadingMd>{localize(locale, 'gallery')}</AppHeadingMd>
            </motion.div>
            <motion.div variants={photoAnimation}>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                {Collages.map((data, i) => (
                  <SwiperSlide key={i}>
                    <Zoom>
                      <Image
                        placeholder="blur"
                        loading="lazy"
                        src={data.image}
                        alt={data.alt}
                      />
                    </Zoom>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        </SectionContainer>
      )}
    </>
  )
}

export default Gallery

export const Collages = [
  {
    image: require('@public/assets/images/1.jpg'),
    title: '',
    alt: '1',
  },
  {
    image: require('@public/assets/images/3.jpg'),
    title: '',
    alt: '2',
  },
  {
    image: require('@public/assets/images/4.jpg'),
    title: '',
    alt: '3',
  },
  {
    image: require('@public/assets/images/5.png'),
    title: '',
    alt: '4',
  },
  {
    image: require('@public/assets/images/6.png'),
    title: '',
    alt: '5',
  },
  {
    image: require('@public/assets/images/7.png'),
    title: '',
    alt: '6',
  },
  {
    image: require('@public/assets/images/8.jpg'),
    title: '',
    alt: '7',
  },
  {
    image: require('@public/assets/images/9.jpg'),
    title: '',
    alt: '9',
  },
]
