import React from "react";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("@components/organisms/Intro"));
const Gallery = dynamic(() => import("@components/organisms/Gallery"));
const Video = dynamic(() => import("@components/organisms/Video"));

const LandingPage = () => {
  return (
    <>
      <Intro />
      <Gallery />
      <Video />
    </>
  );
};

export default LandingPage;
