import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const MediaPlayer = dynamic(() => import("@components/molecules/MediaPlayer"), { ssr: false });

const url = "https://res.cloudinary.com/tv-masa-kini/video/upload/v1662469396/Mutiara_Ahmad_1_r95lb2.mp4";

const Video: React.FC = () => {
  const { locale } = useRouter();

  return (
    <Container marginTop={{ base: "10" }} maxW="7xl" paddingTop={{ base: "7" }} paddingLeft={{ base: "7", md: "20", lg: "15" }} paddingRight={{ base: "7", md: "20", lg: "15" }} paddingBottom={{ base: "4", md: "10" }} id="video">
      <Heading marginBottom={{ base: "10", md: "6", sm: "3" }} as="h2">
        {localize(locale, "video")}
      </Heading>
      <MediaPlayer url={url} />
    </Container>
  );
};

export default Video;
