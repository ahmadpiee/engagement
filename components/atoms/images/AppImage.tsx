import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { photoAnimation } from "@components/atoms/animations/index";

interface AppImageProps {
  src?: string;
  alt?: string;
}

const AppImage: React.FC<AppImageProps> = ({ alt, src }) => {
  return (
    <motion.div variants={photoAnimation}>
      <Image alt={alt} src={src} />
    </motion.div>
  );
};

export default AppImage;

AppImage.defaultProps = {
  alt: "image",
};
