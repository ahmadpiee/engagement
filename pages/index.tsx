import React from "react";
import Layout from "@components/global/Layout";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";
import { NextPage } from "next";
import LandingPage from "@components/template/LandingPage";
import { Progress } from "@chakra-ui/react";

const HomePage: NextPage = () => {
  const { locale } = useRouter();
  const [loading, setLoading] = React.useState<Boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <Layout title={localize(locale, "home")}>{loading ? <Progress size="xs" zIndex={9999} isIndeterminate /> : <LandingPage />}</Layout>;
};

export default HomePage;
