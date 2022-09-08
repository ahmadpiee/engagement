import React from "react";
import { Container, Grid, GridItem, Skeleton, SkeletonText } from "@chakra-ui/react";
import Image from "next/image";

const images = [require("@public/assets/images/photo1.JPG")];

const SkeletonIntro: React.FC = () => {
  return (
    <Container minW="100%" id="intro">
      <Grid style={{ justifyContent: "center", alignItems: "center" }} h="min-content" w="full" templateRows="repeat(3, 1fr)" templateColumns="repeat(8, 1fr)" gap={4} mb="4">
        {/* hero */}
        <GridItem style={{ overflow: "hidden" }} rowSpan={3} colSpan={{ base: 8, md: 3 }} w="full" textAlign={{ base: "center", md: "left" }}>
          <Skeleton>
            <Image src={images[0]} alt="image alt" />
          </Skeleton>
        </GridItem>
        <GridItem rowSpan={3} colSpan={{ base: 8, md: 5 }} position={{ base: "relative" }} w="full">
          <Grid justifyContent="center" alignItems="center">
            <SkeletonText noOfLines={1} textAlign="center" width="300px" />
          </Grid>
          <br />
          <SkeletonText noOfLines={4} />
          <br />
          <SkeletonText noOfLines={4} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default SkeletonIntro;
