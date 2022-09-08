import * as React from "react";
import dynamic from "next/dynamic";
import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { Hide, titleAnimation, fadeInUp, stagger } from "@components/atoms/animations";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AppImage = dynamic(() => import("@components/atoms/images/AppImage"), { ssr: false });
const images = [require("@public/assets/images/photo1.JPG")];

const Intro: React.FC = () => {
  const { locale } = useRouter();
  const constrols = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  if (view) {
    constrols.start("show");
  } else {
    constrols.start("hidden");
  }

  return (
    <Container minW="100%" id="intro">
      <motion.div ref={element} initial="hidden" animate={constrols}>
        <Grid style={{ justifyContent: "center", alignItems: "center" }} h="min-content" w="full" templateRows="repeat(3, 1fr)" templateColumns="repeat(8, 1fr)" gap={4} mb="4">
          {/* hero */}
          <GridItem style={{ overflow: "hidden" }} rowSpan={3} colSpan={{ base: 8, md: 3 }} w="full" textAlign={{ base: "center", md: "left" }}>
            <AppImage src={images[0]} alt="image alt" />
          </GridItem>
          {/* prolouge */}
          <GridItem rowSpan={3} colSpan={{ base: 8, md: 5 }} position={{ base: "relative" }} w="full">
            <Hide>
              <motion.h2 variants={titleAnimation}>
                <Text fontFamily="arabic" fontSize="2xl" textAlign="center">
                  {localize(locale, "basmallah")}
                </Text>
              </motion.h2>
            </Hide>
            <br />
            <Hide>
              <motion.p variants={fadeInUp}>{localize(locale, "arRum")}</motion.p>
            </Hide>
            <br />
            <Hide>
              <motion.p variants={fadeInUp}>{localize(locale, "prolouge")}</motion.p>
            </Hide>
          </GridItem>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Intro;
