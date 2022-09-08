import React from "react";
import Head from "next/head";
import { pageAnimation } from "@components/atoms/animations/index";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface LayoutProps {
  children?: any;
  className?: string;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className, title, description, keywords }) => {
  const constrols = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  const router = useRouter();

  if (view) {
    constrols.start("show");
  } else {
    constrols.start("hidden");
  }

  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <motion.div ref={element} key={router.route} exit="exit" variants={pageAnimation} initial="hidden" animate="show">
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
