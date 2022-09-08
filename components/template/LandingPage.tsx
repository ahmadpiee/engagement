import React from "react";
import dynamic from "next/dynamic";
import { Container } from "@chakra-ui/react";

const Intro = dynamic(() => import("@components/organisms/Intro"));
const Gallery = dynamic(() => import("@components/organisms/Gallery"));
const Video = dynamic(() => import("@components/organisms/Video"));

const LandingPage: React.FC = () => {
  return (
    <Container
      minW="100%"
      paddingTop={{ base: "6rem", xl: "10rem", lg: "8rem", md: "6rem", sm: "7rem" }}
      paddingLeft={{ base: "0.5rem", xl: "16rem", lg: "12rem", md: "8rem", sm: "2rem" }}
      paddingRight={{ base: "0.5rem", xl: "16rem", lg: "12rem", md: "8rem", sm: "2rem" }}
    >
      <Intro />
      <Gallery />
      <Video />
    </Container>
  );
};

export default LandingPage;
