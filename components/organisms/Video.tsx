import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Collages = [
  {
    image: require("@public/assets/images/3.jpg"),
    title: "",
    alt: "3",
  },
  {
    image: require("@public/assets/images/4.jpg"),
    title: "",
    alt: "4",
  },
  {
    image: require("@public/assets/images/5.png"),
    title: "",
    alt: "5",
  },
  {
    image: require("@public/assets/images/6.png"),
    title: "",
    alt: "6",
  },
  {
    image: require("@public/assets/images/7.png"),
    title: "",
    alt: "7",
  },
];

const Video: React.FC = () => {
  const { locale } = useRouter();

  return (
    <Container marginTop={{ base: "10" }} maxW="6xl" paddingTop={{ base: "7" }} paddingLeft={{ base: "7", md: "20", lg: "15" }} paddingRight={{ base: "7", md: "20", lg: "15" }} paddingBottom={{ base: "4", md: "10" }} id="video">
      <Heading as="h2">{localize(locale, "video")}</Heading>
      <video
        autoPlay
        loop
        src="https://asset.cloudinary.com/tv-masa-kini/67293a9016cf1b580b5fcc0d6d71c346"
        style={{
          height: "550px",
          width: "100%",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
        }}
      ></video>
    </Container>
  );
};

export default Video;
