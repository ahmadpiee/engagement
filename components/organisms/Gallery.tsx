// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
//
import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { fadeInUp, photoAnimation, titleAnimation } from "@components/atoms/animations";
import { motion } from "framer-motion";
import useScroll from "@hooks/useScroll";
import dynamic from "next/dynamic";

const SkeletonCollage = dynamic(() => import("@components/molecules/skeleton/landing-page/SkeletonCollage"));

const Gallery: React.FC = () => {
  const { locale } = useRouter();
  const { controls, element } = useScroll();
  const [loading, setLoading] = React.useState<Boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonCollage />
      ) : (
        <Container marginTop={{ base: "10" }} minW="100%" id="gallery">
          <motion.div variants={fadeInUp} ref={element} animate={controls} initial="hidden">
            <motion.div variants={titleAnimation}>
              <Heading marginBottom={{ base: "15", xl: "12.5", lg: "11.5", md: "10", sm: "8.5" }} as="h2">
                {localize(locale, "gallery")}
              </Heading>
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
                    <Image objectFit="cover" placeholder="blur" loading="lazy" src={data.image} alt={data.alt} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        </Container>
      )}
    </>
  );
};

export default Gallery;

export const Collages = [
  {
    image: require("@public/assets/images/1.jpg"),
    title: "",
    alt: "1",
  },
  {
    image: require("@public/assets/images/3.jpg"),
    title: "",
    alt: "2",
  },
  {
    image: require("@public/assets/images/4.jpg"),
    title: "",
    alt: "3",
  },
  {
    image: require("@public/assets/images/5.png"),
    title: "",
    alt: "4",
  },
  {
    image: require("@public/assets/images/6.png"),
    title: "",
    alt: "5",
  },
  {
    image: require("@public/assets/images/7.png"),
    title: "",
    alt: "6",
  },
  {
    image: require("@public/assets/images/8.jpg"),
    title: "",
    alt: "7",
  },
  {
    image: require("@public/assets/images/9.jpg"),
    title: "",
    alt: "9",
  },
];
