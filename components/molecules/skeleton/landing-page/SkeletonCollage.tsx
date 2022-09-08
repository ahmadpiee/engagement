// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
//
import React from "react";
import { Container, Heading, Skeleton, SkeletonText } from "@chakra-ui/react";
import Image from "next/image";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

const SkeletonIntro: React.FC = () => {
  const { locale } = useRouter();
  return (
    <Container marginTop={{ base: "10" }} minW="100%" id="gallery">
      <Skeleton mb="10" h="50px" w="120px">
        {localize(locale, "gallery")}
      </Skeleton>
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
            <Skeleton>
              <Image objectFit="cover" placeholder="blur" loading="lazy" src={data.image} alt={data.alt} />
            </Skeleton>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default SkeletonIntro;

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
