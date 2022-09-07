import * as React from "react";
import { Container, Grid, Text, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";

const images = [require("@public/assets/images/photo1.JPG")];

const Intro: React.FC = () => {
  const { locale } = useRouter();
  return (
    <Container maxW="7xl" paddingTop={{ base: "20", md: "25", lg: "40" }} paddingLeft={{ base: "7", md: "20", lg: "15" }} paddingRight={{ base: "7", md: "20", lg: "15" }} id="intro">
      <Grid style={{ justifyContent: "center", alignItems: "center" }} h="min-content" w="full" templateRows="repeat(3, 1fr)" templateColumns="repeat(8, 1fr)" gap={4} mb="4">
        <GridItem style={{ overflow: "hidden" }} rowSpan={3} colSpan={{ base: 8, md: 3 }} w="full" textAlign={{ base: "center", md: "left" }}>
          <Image loading="lazy" alt="photo" src={images[0]} />
        </GridItem>
        <GridItem rowSpan={3} colSpan={{ base: 8, md: 5 }} position={{ base: "relative" }} w="full">
          <Text>{localize(locale, "arRum")}</Text>
          <br />
          <Text>{localize(locale, "prolouge")}</Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Intro;
