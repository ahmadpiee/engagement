import React from "react";
import Head from "next/head";
import { pageAnimation } from "@components/atoms/animations/index";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface LayoutProps {
  children?: any;
  className?: string;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className, title, description, keywords }) => {
  const router = useRouter();

  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <motion.div key={router.route} exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        {children}
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
