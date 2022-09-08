import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { fadeInUp, photoAnimation, titleAnimation } from "@components/atoms/animations";
import { motion } from "framer-motion";
import useScroll from "@hooks/useScroll";

const MediaPlayer = dynamic(() => import("@components/molecules/media-player/MediaPlayer"), { ssr: false });

const url = "https://res.cloudinary.com/tv-masa-kini/video/upload/v1662469396/Mutiara_Ahmad_1_r95lb2.mp4";
const light = "https://res.cloudinary.com/tv-masa-kini/image/upload/v1662556413/photo1_i3pgbt.jpg";

const Video: React.FC = () => {
  const { locale } = useRouter();
  const { controls, element } = useScroll();

  return (
    <Container marginTop={{ base: "10" }} minW="100%" id="video">
      <motion.div ref={element} initial="hidden" animate={controls} variants={fadeInUp}>
        <motion.div variants={titleAnimation}>
          <Heading marginBottom={{ base: "15", xl: "12.5", lg: "11.5", md: "10", sm: "8.5" }} as="h2">
            {localize(locale, "video")}
          </Heading>
        </motion.div>
        <motion.div variants={photoAnimation}>
          <MediaPlayer url={url} light={light} />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Video;
