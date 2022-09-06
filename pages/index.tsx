import React from "react";
import dynamic from "next/dynamic";
import Layout from "@components/global/Layout";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Intro = dynamic(() => import("@components/organisms/Intro"));
const Gallery = dynamic(() => import("@components/organisms/Gallery"));
const Video = dynamic(() => import("@components/organisms/Video"));

const HomePage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Layout title={localize(locale, "home")}>
      <Intro />
      <Gallery />
      <Video />
    </Layout>
  );
};

export default HomePage;
