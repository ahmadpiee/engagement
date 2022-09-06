import React from "react";
import Head from "next/head";
import { PageAnimation } from "@components/atoms/animations";
import { motion } from "framer-motion";

const Layout = ({ children, className = null, title, description, keywords }) => {
  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <motion.div variants={PageAnimation} initial="hidden" animate="show">
        <main>{children}</main>
      </motion.div>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Ahmadpiee NextJs App",
  description: "Ahmadpiee NextJs App Boiler Plate",
  keywords: "ahmadpiee",
};
