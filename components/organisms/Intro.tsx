import * as React from "react";
import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { Hide, titleAnimation, fadeInUp, photoAnimation } from "@components/atoms/animations";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import useScroll from "@hooks/useScroll";
import Image from "next/image";
import dynamic from "next/dynamic";
import useLoading from "@hooks/useLoading";

const images = [require("@public/assets/images/photo1.JPG")];
const SkeletonIntro = dynamic(() => import("@components/molecules/skeleton/landing-page/SkeletonIntro"));

const Intro: React.FC = () => {
  const { locale } = useRouter();
  const { controls, element } = useScroll();
  const { loading } = useLoading();

  return (
    <>
      {loading ? (
        <SkeletonIntro />
      ) : (
        <Container minW="100%" id="intro">
          <motion.div variants={fadeInUp} ref={element} initial="hidden" animate={controls}>
            <Grid style={{ justifyContent: "center", alignItems: "center" }} h="min-content" w="full" templateRows="repeat(3, 1fr)" templateColumns="repeat(8, 1fr)" gap={4} mb="4">
              {/* hero */}
              <GridItem style={{ overflow: "hidden" }} rowSpan={3} colSpan={{ base: 8, md: 3 }} w="full" textAlign={{ base: "center", md: "left" }}>
                <motion.div variants={photoAnimation}>
                  <Image src={images[0]} alt="image alt" />
                </motion.div>
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
      )}
    </>
  );
};

export default Intro;
