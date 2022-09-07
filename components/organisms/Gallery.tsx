import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Collages = [
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

const Gallery: React.FC = () => {
  const { locale } = useRouter();

  return (
    <Container marginTop={{ base: "10" }} maxW="7xl" paddingTop={{ base: "7" }} paddingLeft={{ base: "7", md: "20", lg: "15" }} paddingRight={{ base: "7", md: "20", lg: "15" }} id="gallery">
      <Heading marginBottom={{ base: "15", xl: "12.5", lg: "11.5", md: "10", sm: "8.5" }} as="h2">
        {localize(locale, "gallery")}
      </Heading>
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
    </Container>
  );
};

export default Gallery;
